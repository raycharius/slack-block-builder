import { ElementBuilderBase } from '../base';
import { SlackElementDto } from '../lib';
import {
  ActionId,
  Confirm,
  End,
  InitialOption,
  Options,
  Build,
} from '../methods';
import { applyMixins, getBuilderResult, getBuilderResults } from '../helpers';
import { ElementType } from '../constants';

import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface RadioButtonsParams {
  actionId?: string;
}

export interface RadioButtonsBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  InitialOption,
  Options,
  Build {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#radio
 * @@displayName Radio Buttons
 */

export class RadioButtonsBuilder extends ElementBuilderBase<RadioButtonsParams> {
  /** @internal */

  public build(): SlackElementDto {
    return this.getResult(SlackElementDto, {
      type: ElementType.RadioButtons,
      options: getBuilderResults(this.props.options, { isMarkdown: true }),
      initialOption: getBuilderResult(this.props.initialOption, { isMarkdown: true }),
      confirm: getBuilderResult(this.props.confirm),
    });
  }
}

applyMixins(RadioButtonsBuilder, [
  ActionId,
  Confirm,
  End,
  InitialOption,
  Options,
]);
