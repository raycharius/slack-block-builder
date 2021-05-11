import { ElementBuilder } from '../base';
import { ElementSlackDto } from '../lib';
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

import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface ButtonParams {
  actionId?: string;
  text?: string;
  url?: string;
  value?: string;
}

export interface ButtonBuilder extends HasActionId,
  HasConfirm<ConfirmationDialogBuilder>,
  HasDanger,
  HasEnd,
  HasPrimary,
  HasText,
  HasUrl,
  HasValue,
  MustBuild {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#button
 * @@displayName Button
 */

export class ButtonBuilder extends ElementBuilder<ButtonParams> {
  public build(): ElementSlackDto {
    const augmentedProps = {
      confirm: getBuilderResult(this.props.confirm),
      text: getPlainTextObject(this.props.text),
    };

    return this.getResult(ElementSlackDto, augmentedProps);
  }
}

applyMixins(ButtonBuilder, [
  HasActionId,
  HasConfirm,
  HasDanger,
  HasEnd,
  HasPrimary,
  HasText,
  HasUrl,
  HasValue,
]);
