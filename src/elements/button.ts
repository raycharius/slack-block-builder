import { ElementBuilderBase } from '../internal/base';
import { ElementType } from '../internal/constants';
import { SlackElementDto } from '../internal/dto';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../internal/helpers';
import {
  AccessibilityLabel,
  ActionId,
  Confirm,
  Danger,
  End,
  Primary,
  Text,
  Url,
  Value,
} from '../internal/methods';

import type { SlackDto } from '../internal/dto';
import type { ConfirmationDialogBuilder } from '../bits';

export interface ButtonParams {
  accessibilityLabel?: string;
  actionId?: string;
  text?: string;
  url?: string;
  value?: string;
}

export interface ButtonBuilder extends AccessibilityLabel,
  ActionId,
  Confirm<ConfirmationDialogBuilder>,
  Danger,
  End,
  Primary,
  Text,
  Url,
  Value {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/button-element
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
  AccessibilityLabel,
  ActionId,
  Confirm,
  Danger,
  End,
  Primary,
  Text,
  Url,
  Value,
]);
