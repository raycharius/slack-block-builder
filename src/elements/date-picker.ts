import { ElementBuilderBase } from '../internal/base';
import { ElementType } from '../internal/constants';
import { SlackElementDto } from '../internal/dto';
import {
  applyMixins,
  getPlainTextObject,
  getFormattedDate,
  getBuilderResult,
} from '../internal/helpers';
import {
  ActionId,
  Confirm,
  End,
  FocusOnLoad,
  InitialDate,
  Placeholder,
} from '../internal/methods';

import type { SlackDto } from '../internal/dto';
import type { ConfirmationDialogBuilder } from '../bits';

export interface DatePickerParams {
  actionId?: string;
  initialDate?: Date;
  placeholder?: string;
}

export interface DatePickerBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  FocusOnLoad,
  InitialDate,
  Placeholder {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/date-picker-element
 * @@displayName Date Picker
 */

export class DatePickerBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
    return this.getResult(SlackElementDto, {
      type: ElementType.DatePicker,
      placeholder: getPlainTextObject(this.props.placeholder),
      initialDate: getFormattedDate(this.props.initialDate),
      confirm: getBuilderResult<SlackDto>(this.props.confirm),
    });
  }
}

applyMixins(DatePickerBuilder, [
  ActionId,
  Confirm,
  End,
  FocusOnLoad,
  InitialDate,
  Placeholder,
]);
