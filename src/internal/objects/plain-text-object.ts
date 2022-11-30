import { CompositionObjectBase } from '../base';
import { ObjectType } from '../constants';

export class PlainTextObject extends CompositionObjectBase {
  public type: ObjectType.Text;

  public text: string;

  public emoji?: boolean;

  constructor(text: string, emoji?: boolean) {
    super();

    this.type = ObjectType.Text;
    this.text = text;
    this.emoji = emoji;
  }
}
