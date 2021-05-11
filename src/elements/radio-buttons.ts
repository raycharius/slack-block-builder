import { ElementBuilder } from '../base';
import { ElementSlackDto } from '../lib';
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

import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface RadioButtonsParams {
  actionId?: string;
}

export interface RadioButtonsBuilder extends HasActionId,
  HasConfirm<ConfirmationDialogBuilder>,
  HasEnd,
  HasInitialOption,
  HasOptions,
  MustBuild {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#radio
 * @@displayName Radio Buttons
 */

export class RadioButtonsBuilder extends ElementBuilder<RadioButtonsParams> {
  /** @internal */

  public build(): ElementSlackDto {
    return this.getResult(ElementSlackDto, {
      type: ElementType.RadioButtons,
      options: getBuilderResults(this.props.options, { isMarkdown: true }),
      initialOption: getBuilderResult(this.props.initialOption, { isMarkdown: true }),
      confirm: getBuilderResult(this.props.confirm),
    });
  }
}

applyMixins(RadioButtonsBuilder, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialOption,
  HasOptions,
]);
