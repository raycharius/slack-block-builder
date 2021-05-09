import { ElementBase } from '../base';
import { SlackDto } from '../lib';
import {
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialTime,
  HasPlaceholder,
  MustBuild,
} from '../methods';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../helpers';
import { ElementType } from '../constants';

import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface TimePickerParams {
  actionId?: string;
  initialTime?: string;
  placeholder?: string;
}

export interface TimePickerBuilder extends HasActionId,
  HasConfirm<ConfirmationDialogBuilder>,
  HasEnd,
  HasInitialTime,
  HasPlaceholder,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/block-elements#timepicker}
 */

export class TimePickerBuilder extends ElementBase {
  constructor(params?: TimePickerParams) {
    super(params);

    this.props.type = ElementType.TimePicker;
  }

  public build(): SlackDto {
    const augmentedProps = {
      placeholder: getPlainTextObject(this.props.placeholder),
      confirm: getBuilderResult(this.props.confirm),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(TimePickerBuilder, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialTime,
  HasPlaceholder,
]);
