import { ElementBuilder } from '../base';
import { ElementSlackDto } from '../lib';
import {
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialDate,
  HasPlaceholder,
  MustBuild,
} from '../methods';
import {
  applyMixins,
  getPlainTextObject,
  getFormattedDate,
  getBuilderResult,
} from '../helpers';
import { ElementType } from '../constants';

import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface DatePickerParams {
  actionId?: string;
  initialDate?: Date;
  placeholder?: string;
}

export interface DatePickerBuilder extends HasActionId,
  HasConfirm<ConfirmationDialogBuilder>,
  HasEnd,
  HasInitialDate,
  HasPlaceholder,
  MustBuild {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#datepicker
 * @@displayName Date Picker
 */

export class DatePickerBuilder extends ElementBuilder<DatePickerParams> {
  /** @internal */

  public build(): ElementSlackDto {
    return this.getResult(ElementSlackDto, {
      type: ElementType.DatePicker,
      placeholder: getPlainTextObject(this.props.placeholder),
      initialDate: getFormattedDate(this.props.initialDate),
      confirm: getBuilderResult(this.props.confirm),
    });
  }
}

applyMixins(DatePickerBuilder, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialDate,
  HasPlaceholder,
]);
