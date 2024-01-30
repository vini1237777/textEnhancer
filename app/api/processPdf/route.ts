import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import extractInformation from "@/app/services/langchainService";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import fs from "fs";
import pathModule from "path";

const question = [
  "Create a single object with relevant key-value pairs from the data. The key should be concise, not more than two words with space between them, and enclosed in double quotes. The value should be a brief string."
];

export async function POST(
  req: Request,
) {
  
  try {
   
         const formData = await req.formData();
         const filePath = pathModule.resolve("./", "sample_data.json");
    
        if (formData?.get('isSampleFile') === 'true') {
           

        if (fs.existsSync(filePath)) {
          // File exists, read and return the data
          const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
          return NextResponse.json(
            {
              data: data || {},
            },
            { status: 200 }
          );
        }

        }

     
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

        const docs = await loader.load();
        const fullText = docs.map((doc) => doc.pageContent).join(" ");
        const questions: string[] = [...question];
        const extractedInfo = (await extractInformation(
          fullText,
          questions
        )) as { text: string };
        if (extractedInfo) {
          if (extractedInfo?.text) {
            const textString = extractedInfo?.text || "";
            const jsonPart = textString?.trim()?.match(/{[^]*?}/g) || "{}";
            const parsedJson = JSON.parse(jsonPart as string);
            
            if (formData?.get('isSampleFile') === 'true') {
              await fs.writeFile(
                filePath,
                JSON.stringify(parsedJson),
                "utf8", (err) => {
                 if (err) {
                  return;
                 }
                }
              )
            }

            return NextResponse.json(
              {
                data: parsedJson || {},
              },
              { status: 200 }
            );
          }
        }
        return NextResponse.json(
          {
            error: "Something Went Wrong!",
          },
          { status: 500 }
        );
      } catch (error: any) {
        console.log(error, 'catch');
        return NextResponse.json(
          {
            error:
              error?.error?.message ||
              error?.message ||
              "Something Went Wrong!",
            code: error?.error?.code,
          },
          { status: 500 }
        );
      }
}

