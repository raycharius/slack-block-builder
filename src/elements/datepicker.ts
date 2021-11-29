import {
  applyMixins,
  getPlainTextObject,
  getFormattedDate,
  getBuilderResult,
  ElementBuilderBase,
  SlackElementDto,
} from '../lib';
import {
  ActionId,
  Confirm,
  End,
  FocusOnLoad,
  InitialDate,
  Placeholder,
} from '../methods';
import { ElementType } from '../constants';

import type { SlackDto } from '../lib';
import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

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
 * @@link https://api.slack.com/reference/block-kit/block-elements#datepicker
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
