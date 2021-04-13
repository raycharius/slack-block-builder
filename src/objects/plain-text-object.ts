import { UtilityObjectBase } from '../base';
import { objectTypes } from '../constants';

export class PlainTextObject extends UtilityObjectBase {
  public type: string;

  public text: string;

  constructor(text: string) {
    super();

    this.type = objectTypes.objects.text;
    this.text = text;
  }
}
