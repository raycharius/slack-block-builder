import { BitBuilderBase } from '../internal/base';
import { SlackDto } from '../internal/dto';
import { applyMixins, getPlainTextObject, getMarkdownObject } from '../internal/helpers';
import {
  Confirm,
  Danger,
  Deny,
  End,
  Primary,
  Text,
  Title,
} from '../internal/methods';

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
 * @@link https://docs.slack.dev/reference/block-kit/composition-objects/confirmation-dialog-object
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
