import { BitBase } from '../base';
import { SlackDto } from '../lib';
import {
  HasConfirm,
  HasDanger,
  HasDeny,
  HasEnd,
  HasPrimary,
  HasText,
  HasTitle,
  MustBuild,
} from '../methods';
import { applyMixins, getPlainTextObject, getMarkdownObject } from '../helpers';

export interface ConfirmationDialogParams {
  confirm?: string;
  deny?: string;
  text?: string;
  title?: string;
}

export interface ConfirmationDialogBit extends HasConfirm<string>,
  HasDanger,
  HasDeny,
  HasEnd,
  HasPrimary,
  HasText,
  HasTitle,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/composition-objects#confirm}
 */

export class ConfirmationDialogBit extends BitBase implements ConfirmationDialogBit {
  constructor(params?: ConfirmationDialogParams) {
    super(params);
  }

  public build(): SlackDto {
    const augmentedProps = {
      text: getMarkdownObject(this.props.text),
      title: getPlainTextObject(this.props.title),
      confirm: getPlainTextObject(this.props.confirm),
      deny: getPlainTextObject(this.props.deny),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(ConfirmationDialogBit, [
  HasConfirm,
  HasDanger,
  HasDeny,
  HasEnd,
  HasPrimary,
  HasText,
  HasTitle,
]);
