import { BitBuilder } from '../base';
import { SlackDto } from '../lib';
import {
  Confirm,
  Danger,
  Deny,
  End,
  Primary,
  Text,
  Title,
  Build,
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
  Title,
  Build {
}

/**
 * @@link https://api.slack.com/reference/block-kit/composition-objects#confirm
 * @@displayName Confirmation Dialog
 */

export class ConfirmationDialogBuilder extends BitBuilder<ConfirmationDialogParams> {
  /** @internal */

  public build(): SlackDto {
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
