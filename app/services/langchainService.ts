import { OpenAI } from "@langchain/openai";
import { loadQAStuffChain } from "langchain/chains";
import { Document } from "langchain/document";


const llm = new OpenAI({
  modelName: "gpt-4",
  temperature: 0.9,
  openAIApiKey: process.env.OPENAI_API_KEY,
});
const chain = loadQAStuffChain(llm);

async function extractInformation(
  docs:  string,
  questions: string[]
) {

  
    return chain.call({
          input_documents: [new Document({ pageContent: docs })],
          question: questions[0],
        })

}

export default extractInformation;
