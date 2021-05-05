import { ElementBase } from '../base';
import { SlackDto } from '../lib';
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

import type { ConfirmationDialogBit } from '../bits/confirmation-dialog';

export interface DatePickerParams {
  actionId?: string;
  initialDate?: Date;
  placeholder?: string;
}

export interface DatePickerElement extends HasActionId,
  HasConfirm<ConfirmationDialogBit>,
  HasEnd,
  HasInitialDate,
  HasPlaceholder,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/block-elements#datepicker}
 */

export class DatePickerElement extends ElementBase implements DatePickerElement {
  constructor(params?: DatePickerParams) {
    super(params);

    this.props.type = ElementType.DatePicker;
  }

  public build(): SlackDto {
    const augmentedProps = {
      placeholder: getPlainTextObject(this.props.placeholder),
      initialDate: getFormattedDate(this.props.initialDate),
      confirm: getBuilderResult(this.props.confirm),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(DatePickerElement, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialDate,
  HasPlaceholder,
]);
