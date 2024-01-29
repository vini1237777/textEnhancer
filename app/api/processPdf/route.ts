import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import extractInformation from "@/app/services/langchainService";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

const question = [
  `create a single object with relevant key value pair from the data, they key should not be more than two words and should have space between them inside the double quotes string and the value should be a string, not an object. Also keep general information like name, contact etc first`,
];


export async function POST(req: Request) {
  const formData = await req.formData();
  const file: File | null = formData.get("file") as unknown as File;
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
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
    const extractedInfo = await extractInformation(fullText, questions);

    if (extractedInfo) {
      const jsonPartArray = extractedInfo.match(/{[^]*?}/g);
      const mergedData = jsonPartArray
        ? jsonPartArray.reduce((acc, jsonString) => {
            return { ...acc, ...JSON.parse(jsonString) };
          }, {})
        : {};

      return NextResponse.json({ data: mergedData }, { status: 200 });
    } else {
      return NextResponse.json({ data: {} }, { status: 200 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

