import { UtilityObjectBase } from '../base';
import { ObjectType } from '../constants';

export class PlainTextObject extends UtilityObjectBase {
  public type: ObjectType;

  public text: string;

  constructor(text: string) {
    super();

    this.type = ObjectType.Text;
    this.text = text;
  }
}
