import { ElementBuilderBase } from '../internal/base';
import { ElementType } from '../internal/constants';
import { SlackElementDto } from '../internal/dto';
import { applyMixins, getBuilderResult, getDateTimeIntegerFromDate } from '../internal/helpers';
import {
  ActionId,
  Confirm,
  End,
  FocusOnLoad,
  InitialDateTime,
} from '../internal/methods';

import type { SlackDto } from '../internal/dto';
import type { ConfirmationDialogBuilder } from '../bits';

export interface DateTimePickerParams {
  actionId?: string;
  initialDateTime?: Date;
}

export interface DateTimePickerBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  FocusOnLoad,
  InitialDateTime {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/datetime-picker-element
 * @@displayName Date Picker
 */

export class DateTimePickerBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
    return this.getResult(SlackElementDto, {
      type: ElementType.DateTimePicker,
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
]);
