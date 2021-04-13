import { UtilityObjectBase } from '../base';
import { objectTypes } from '../constants';

export class MarkdownObject extends UtilityObjectBase {
  public type: string;

  public text: string;

  constructor(text: string) {
    super();

    this.type = objectTypes.objects.markdown;
    this.text = text;
  }
}
