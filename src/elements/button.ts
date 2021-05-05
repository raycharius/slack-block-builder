import { ElementBase } from '../base';
import { SlackDto } from '../lib';
import {
  HasActionId,
  HasConfirm,
  HasDanger,
  HasEnd,
  HasPrimary,
  HasText,
  HasUrl,
  HasValue,
  MustBuild,
} from '../methods';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../helpers';
import { ElementType } from '../constants';

import type { ConfirmationDialogBit } from '../bits/confirmation-dialog';

export interface ButtonParams {
  actionId?: string;
  text?: string;
  url?: string;
  value?: string;
}

export interface ButtonElement extends HasActionId,
  HasConfirm<ConfirmationDialogBit>,
  HasDanger,
  HasEnd,
  HasPrimary,
  HasText,
  HasUrl,
  HasValue,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/block-elements#button}
 */

export class ButtonElement extends ElementBase implements ButtonElement {
  constructor(params?: ButtonParams) {
    super(params);

    this.props.type = ElementType.Button;
  }

  public build(): SlackDto {
    const augmentedProps = {
      confirm: getBuilderResult(this.props.confirm),
      text: getPlainTextObject(this.props.text),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(ButtonElement, [
  HasActionId,
  HasConfirm,
  HasDanger,
  HasEnd,
  HasPrimary,
  HasText,
  HasUrl,
  HasValue,
]);