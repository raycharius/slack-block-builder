import { CompositionObjectBase } from '../base';
import { ObjectType } from '../constants/object-types';

export class MarkdownObject extends CompositionObjectBase {
  public type: ObjectType;

  public text: string;

  constructor(text: string) {
    super();

    this.type = ObjectType.Markdown;
    this.text = text;
  }
}
