import { ElementBuilderBase } from '../base';
import { SlackElementDto } from '../lib';
import {
  ActionId,
  Confirm,
  End,
  InitialTime,
  Placeholder,
} from '../methods';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../helpers';
import { ElementType } from '../constants';

import type { SlackDto } from '../lib';
import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface TimePickerParams {
  actionId?: string;
  initialTime?: string;
  placeholder?: string;
}

export interface TimePickerBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  InitialTime,
  Placeholder {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#timepicker
 * @@displayName Time Picker
 */

export class TimePickerBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): SlackElementDto {
    return this.getResult(SlackElementDto, {
      type: ElementType.TimePicker,
      placeholder: getPlainTextObject(this.props.placeholder),
      confirm: getBuilderResult<SlackDto>(this.props.confirm),
    });
  }
}

applyMixins(TimePickerBuilder, [
  ActionId,
  Confirm,
  End,
  InitialTime,
  Placeholder,
]);
