import { UtilityObjectBase } from '../base';
import { ObjectType } from '../constants';

export class MarkdownObject extends UtilityObjectBase {
  public type: ObjectType;

  public text: string;

  constructor(text: string) {
    super();

    this.type = ObjectType.Markdown;
    this.text = text;
  }
}
