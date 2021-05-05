import { ElementBase } from '../base';
import { SlackDto } from '../lib';
import {
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialOption,
  HasOptions,
  MustBuild,
} from '../methods';
import { applyMixins, getBuilderResult, getBuilderResults } from '../helpers';
import { ElementType } from '../constants';

import type { ConfirmationDialogBit } from '../bits/confirmation-dialog';

export interface RadioButtonsParams {
  actionId?: string;
}

export interface RadioButtonsElement extends HasActionId,
  HasConfirm<ConfirmationDialogBit>,
  HasEnd,
  HasInitialOption,
  HasOptions,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/block-elements#radio}
 */

export class RadioButtonsElement extends ElementBase implements RadioButtonsElement {
  constructor(params?: RadioButtonsParams) {
    super(params);

    this.props.type = ElementType.RadioButtons;
  }

  public build(): SlackDto {
    const augmentedProps = {
      options: getBuilderResults(this.props.options, { isMarkdown: true }),
      initialOption: getBuilderResult(this.props.initialOption, { isMarkdown: true }),
      confirm: getBuilderResult(this.props.confirm),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(RadioButtonsElement, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialOption,
  HasOptions,
]);
