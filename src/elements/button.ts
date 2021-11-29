import {
  applyMixins,
  getPlainTextObject,
  getBuilderResult,
  ElementBuilderBase,
  SlackElementDto,
} from '../lib';
import {
  ActionId,
  Confirm,
  Danger,
  End,
  Primary,
  Text,
  Url,
  Value,
} from '../methods';

import { ElementType } from '../constants';

import type { SlackDto } from '../lib';
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
  Value {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#button
 * @@displayName Button
 */

export class ButtonBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
    return this.getResult(SlackElementDto, {
      type: ElementType.Button,
      confirm: getBuilderResult<SlackDto>(this.props.confirm),
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
