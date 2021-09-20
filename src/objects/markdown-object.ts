import { CompositionObjectBase } from '../base';
import { ObjectType } from '../constants';

export class MarkdownObject extends CompositionObjectBase {
  public type: ObjectType.Markdown;

  public text: string;

  constructor(text: string) {
    super();

    this.type = ObjectType.Markdown;
    this.text = text;
  }
}
