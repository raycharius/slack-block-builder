import { CompositionObjectBase } from '../base';
import { ObjectType } from '../constants';

export class PlainTextObject extends CompositionObjectBase {
  public type: ObjectType.Text;

  public text: string;

  constructor(text: string) {
    super();

    this.type = ObjectType.Text;
    this.text = text;
  }
}
