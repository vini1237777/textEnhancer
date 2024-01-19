import { Content } from "./classes";
import { IContent } from "./types";

export const dagDropContent: IContent = new Content(
  "Drop your file here, or browse",
  "Supports PDF",
  "Upload File"
);
export const pdfConversionContent: IContent = new Content(
  "Your file has been converted and ready to be displayed. Click on reset to convert another file.",
  "",
  "Display Data"
);

export const toolDescriptionContent: IContent = new Content(
  ["Enhanced Text", "Extractor Tool"],
  "Our deep learning data extraction technology immensely reduces manual errors and saves countless",
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


export const loaderText: string ="Please wait for few seconds. Your document is getting processed.";
export const tableHeading: string = "Header";
export const tableValue: string = "Value";
export const navLOGOTitle: string = "Enhanced Text Extractor Tool";

export const errorContent: IContent = new Content("Something went wrong!", "", "Try Again!");