import { ElementBuilderBase } from '../internal/base';
import { ElementType } from '../internal/constants';
import { SlackElementDto } from '../internal/dto';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../internal/helpers';
import {
  ActionId,
  Confirm,
  End,
  FocusOnLoad,
  InitialTime,
  Placeholder,
} from '../internal/methods';

import type { SlackDto } from '../internal/dto';
import type { ConfirmationDialogBuilder } from '../bits';

export interface TimePickerParams {
  actionId?: string;
  initialTime?: string;
  placeholder?: string;
}

export interface TimePickerBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  FocusOnLoad,
  InitialTime,
  Placeholder {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/time-picker-element
 * @@displayName Time Picker
 */

export class TimePickerBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
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
  FocusOnLoad,
  InitialTime,
  Placeholder,
]);
