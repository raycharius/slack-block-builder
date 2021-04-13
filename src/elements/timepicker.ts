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
import { objectTypes } from '../constants';

export interface TimePickerParams {
  actionId?: string;
  initialTime?: string;
  placeholder?: string;
}

export interface TimePickerElement extends HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialTime,
  HasPlaceholder,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/block-elements#timepicker}
 */

export class TimePickerElement extends ElementBase implements TimePickerElement {
  constructor(params?: TimePickerParams) {
    super(params);

    this.props.type = objectTypes.elements.timePicker;
  }

  public build(): SlackDto {
    const augmentedProps = {
      placeholder: getPlainTextObject(this.props.placeholder),
      confirm: getBuilderResult(this.props.confirm),
    };

    return this.getResult(SlackDto, augmentedProps);
  }
}

applyMixins(TimePickerElement, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialTime,
  HasPlaceholder,
]);
