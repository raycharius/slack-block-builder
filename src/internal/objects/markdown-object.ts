import { CompositionObjectBase } from '../base';
import { ObjectType } from '../constants';

export class MarkdownObject extends CompositionObjectBase {
  public type: ObjectType.Markdown;

  public text: string;

  public verbatim?: boolean;

  constructor(text: string, verbatim?: boolean) {
    super();

    this.type = ObjectType.Markdown;
    this.text = text;
    this.verbatim = verbatim;
  }
}
