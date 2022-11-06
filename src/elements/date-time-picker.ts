import { ElementBuilderBase } from '../internal/base';
import { ElementType } from '../internal/constants';
import { SlackElementDto } from '../internal/dto';
import {
  applyMixins,
  getPlainTextObject,
  getBuilderResult,
  getDateTimeIntegerFromDate,
} from '../internal/helpers';
import {
  ActionId,
  Confirm,
  End,
  FocusOnLoad,
  InitialDateTime,
  Placeholder,
} from '../internal/methods';

import type { SlackDto } from '../internal/dto';
import type { ConfirmationDialogBuilder } from '../bits';

export interface DateTimePickerParams {
  actionId?: string;
  initialDateTime?: Date;
  placeholder?: string;
}

export interface DateTimePickerBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  FocusOnLoad,
  InitialDateTime,
  Placeholder {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#datetimepicker
 * @@displayName Date Picker
 */

export class DateTimePickerBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
    return this.getResult(SlackElementDto, {
      type: ElementType.DateTimePicker,
      placeholder: getPlainTextObject(this.props.placeholder),
      initialDateTime: getDateTimeIntegerFromDate(this.props.initialDateTime),
      confirm: getBuilderResult<SlackDto>(this.props.confirm),
    });
  }
}

applyMixins(DateTimePickerBuilder, [
  ActionId,
  Confirm,
  End,
  FocusOnLoad,
  InitialDateTime,
  Placeholder,
]);
