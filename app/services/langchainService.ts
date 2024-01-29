import { OpenAI } from "@langchain/openai";
import { loadQAStuffChain } from "langchain/chains";
import { Document } from "langchain/document";
import { IObject } from "../lib/types";




const llm = new OpenAI({
  modelName: "gpt-4",
  temperature: 0.9,
  openAIApiKey: process.env.OPENAI_API_KEY,
});
const chain = loadQAStuffChain(llm);
function timeout(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Creating an error object with an 'error' property
      reject(
        new Error(
          "The request timed out due to Vercel's free tier limitations. Please upload a less complex file for processing or use the provided sample PDF"
        )
      );
    }, ms);
  });
}

async function extractInformation(
  docs:  string,
  questions: string[]
) {

  
  try {
    const timeoutDuration = 1000; // Timeout duration in milliseconds (e.g., 5000ms = 5s)

    const chainCallPromise = chain.call({
      input_documents: [new Document({ pageContent: docs })],
      question: questions[0],
    });
    // Using Promise.race to race between the chain call and the timeout
    const result = await Promise.race([
      chainCallPromise as IObject ,
      timeout(timeoutDuration) as IObject,
    ]);
    return result;

  } 
  catch (error) {
    throw error;
  }

}

export default extractInformation;
