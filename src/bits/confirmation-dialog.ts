import { BitBuilderBase } from '../base';
import { SlackDto } from '../lib';
import {
  Confirm,
  Danger,
  Deny,
  End,
  Primary,
  Text,
  Title,
} from '../methods';
import { applyMixins, getPlainTextObject, getMarkdownObject } from '../helpers';

export interface ConfirmationDialogParams {
  confirm?: string;
  deny?: string;
  text?: string;
  title?: string;
}

export interface ConfirmationDialogBuilder extends Confirm<string>,
  Danger,
  Deny,
  End,
  Primary,
  Text,
  Title {
}

/**
 * @@link https://api.slack.com/reference/block-kit/composition-objects#confirm
 * @@displayName Confirmation Dialog
 */

export class ConfirmationDialogBuilder extends BitBuilderBase {
  /** @internal */

  public build(): Readonly<SlackDto> {
    return this.getResult(SlackDto, {
      text: getMarkdownObject(this.props.text),
      title: getPlainTextObject(this.props.title),
      confirm: getPlainTextObject(this.props.confirm),
      deny: getPlainTextObject(this.props.deny),
    });
  }
}

applyMixins(ConfirmationDialogBuilder, [
  Confirm,
  Danger,
  Deny,
  End,
  Primary,
  Text,
  Title,
]);
