import { ElementBuilderBase } from '../base';
import { SlackElementDto } from '../lib';
import {
  ActionId,
  Confirm,
  Danger,
  End,
  Primary,
  Text,
  Url,
  Value,
  Build,
} from '../methods';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../helpers';
import { ElementType } from '../constants';

import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface ButtonParams {
  actionId?: string;
  text?: string;
  url?: string;
  value?: string;
}

export interface ButtonBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  Danger,
  End,
  Primary,
  Text,
  Url,
  Value,
  Build {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#button
 * @@displayName Button
 */

export class ButtonBuilder extends ElementBuilderBase<ButtonParams> {
  /** @internal */

  public build(): SlackElementDto {
    return this.getResult(SlackElementDto, {
      type: ElementType.Button,
      confirm: getBuilderResult(this.props.confirm),
      text: getPlainTextObject(this.props.text),
    });
  }
}

applyMixins(ButtonBuilder, [
  ActionId,
  Confirm,
  Danger,
  End,
  Primary,
  Text,
  Url,
  Value,
]);
