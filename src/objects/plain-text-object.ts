import { CompositionObjectBase } from '../base';
import { ObjectType } from '../constants/object-types';

export class PlainTextObject extends CompositionObjectBase {
  public type: ObjectType;

  public text: string;

  constructor(text: string) {
    super();

    this.type = ObjectType.Text;
    this.text = text;
  }
}
