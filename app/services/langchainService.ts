import { OpenAI } from "@langchain/openai";
import { loadQAStuffChain } from "langchain/chains";
import { Document } from "langchain/document";


const llm = new OpenAI({
  modelName: "gpt-4",
  temperature: 0.9,
  openAIApiKey: process.env.OPENAI_API_KEY,
});
const chain = loadQAStuffChain(llm);

async function extractInformation(docs: string, questions: string[]) {
  const chunkSize = 3000; 
  let responseText = "";

  for (let i = 0; i < docs.length; i += chunkSize) {
    const chunk = docs.substring(i, Math.min(i + chunkSize, docs.length));
    const response = await chain.call({
      input_documents: [new Document({ pageContent: chunk })],
      question: questions[0],
    });
    responseText += response.text.trim();
  }

  return responseText;
}

export default extractInformation;
