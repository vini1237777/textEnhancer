
export class Content{
    title: string | string[];
    description: string;
    buttonLabel: string;

    constructor(title: string | string[], description: string, buttonLabel: string ){
      this.title = title;
      this.description = description;
      this.buttonLabel = buttonLabel;
    }
}