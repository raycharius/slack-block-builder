import { ElementBuilder } from '../base';
import { ElementSlackDto } from '../lib';
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
 * @@link https://api.slack.com/reference/block-kit/block-elements#timepicker
 * @@displayName Time Picker
 */

export class TimePickerBuilder extends ElementBuilder<TimePickerParams> {
  /** @internal */

  public build(): ElementSlackDto {
    return this.getResult(ElementSlackDto, {
      type: ElementType.TimePicker,
      placeholder: getPlainTextObject(this.props.placeholder),
      confirm: getBuilderResult(this.props.confirm),
    });
  }
}

applyMixins(TimePickerBuilder, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialTime,
  HasPlaceholder,
]);
