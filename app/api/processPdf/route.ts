import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import extractInformation from "@/app/services/langchainService";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

const question = [
  "Create a single object with relevant key-value pairs from the data. The key should be concise, not more than two words with space between them, and enclosed in double quotes. The value should be a brief string. Prioritize general information like name, contact, etc. Please provide a summarized response that fits within 8000 tokens to avoid errors related to maximum context length limits.",
];

export async function POST(
  req: Request,
) {
     const formData = await req.formData();
    const file: File | null = formData.get("file") as unknown as File;
    if (!file) {
      return NextResponse.json(
        { error: "No files received." },
        { status: 400 }
      );
    }
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const path = `/tmp/${file.name}`;
        await writeFile(path, buffer);
      const loader = new PDFLoader(path, { parsedItemSeparator: "" });
      try {
        const docs = await loader.load();
        const fullText = docs.map((doc) => doc.pageContent).join(" ");
        const questions: string[] = [...question]; 
        const extractedInfo = await extractInformation(
          fullText,
          questions
        ) as {text: string};
        if (extractedInfo) {
           if (extractedInfo?.text){

           }
          const textString = extractedInfo?.text || ''
          const jsonPart = textString?.trim()?.match(/{[^]*?}/g) || "{}";
          const parsedJson = JSON.parse(jsonPart as string);
          return NextResponse.json(
            {
              data: parsedJson || {},
            },
            { status: 200 }
          );
        }
         return NextResponse.json(
           {
             error: "Something Went Wrong!",
           },
           { status: 500 }
         );
        
      } catch (error: any) {
        return NextResponse.json({ error: error?.error?.message || error?.message || "Something Went Wrong!" , code: error?.error?.code }, { status: 500 });
      }
}

