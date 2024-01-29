import { Content } from "./classes";
import { IContent } from "./types";

export const dagDropContent: IContent = new Content(
  "Drop your file here, or browse",
  "Supports PDF",
  "Upload File"
);
export const pdfConversionContent: IContent = new Content(
  "Your file has been converted and ready to be displayed. Click on reset button above to convert another file.",
  "",
  "Display Data"
);

export const toolDescriptionContent: IContent = new Content(
  ["Enhanced Text", "Extractor Tool"],
  "Our deep learning data extraction technology converts pdf to a table with key information.",
  ""
);

export const sampleDocContent: IContent = new Content(
  `Don't have a document ?`,
  "",
  "Try our sample"
);

export const fileProcessingContent: IContent = new Content(
  `Your file is being processed`,
  "",
  ""
);
export const errorContent: IContent = new Content(
  "Something went wrong!",
   "", 
   "Try Again!"
);


export const loaderText: string ="Please wait for few seconds. Your document is getting processed.";
export const tableHeading: string = "Header";
export const tableValue: string = "Value";
export const navLOGOTitle: string = "Enhanced Text Extractor Tool";
export const gptText: string = "POWERED BY GPT-4 integrated LangChain";



export const featuresContent = [
  {
    title: "Technology Stack",
    description: [
      {
        heading: "Framework",
        content: "NextJs, Typescript, Chakra UI",
      },
      {
        heading: "Integration",
        content: "Langchain and OpenAI (GPT-4)",
      },
    ],
  },
  {
    title: "PDF File Handling",
    description: [
      {
        heading: "Efficient Upload",
        content: "Streamlined PDF upload and buffer management.",
      },
      {
        heading: "Content Extraction",
        content: "Accurate text extraction from PDFs.",
      },
    ],
  },
  {
    title: "AI-Powered Data Processing",
    description: [
      {
        heading: "GPT-4 Integration",
        content: "Leverages OpenAI's GPT-4 for data analysis.",
      },
      {
        heading: "Intelligent Parsing",
        content: "Transforms text into structured, meaningful data.",
      },
    ],
  },
  {
    title: "Comprehensive Testing",
    description: [
      {
        heading: "Cypress E2E",
        content: "End-to-end testing for workflow validation.",
      },
      {
        heading: "Jest & React Testing",
        content: "unit/integration testing.",
      },
    ],
  },
];


export const dialogTitle = "FEATURES";

export const githubLink = "https://github.com/vini1237777/textEnhancer";

export const nav = {
  title: "TEXT EXTRACTOR",
  item:'FEATURES'
};