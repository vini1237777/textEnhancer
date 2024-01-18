

export interface IObject {
  [key: string]: any;
}
export type anyFunction = (...args: any[]) => any;

export interface IContent {
    title: string | string[];
    description: string;
    buttonLabel: string;
} 