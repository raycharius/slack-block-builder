import { ElementBuilderBase } from '../base';
import { SlackElementDto } from '../lib';
import {
  ActionId,
  Confirm,
  End,
  InitialOption,
  Options,
} from '../methods';
import { applyMixins, getBuilderResult, getBuilderResults } from '../helpers';
import { ElementType } from '../constants';

import type { SlackDto } from '../lib';
import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface RadioButtonsParams {
  actionId?: string;
}

export interface RadioButtonsBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  InitialOption,
  Options {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#radio
 * @@displayName Radio Buttons
 */

export class RadioButtonsBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): SlackElementDto {
    return this.getResult(SlackElementDto, {
      type: ElementType.RadioButtons,
      options: getBuilderResults<SlackDto>(this.props.options, { isMarkdown: true }),
      initialOption: getBuilderResult<SlackDto>(this.props.initialOption, { isMarkdown: true }),
      confirm: getBuilderResult<SlackDto>(this.props.confirm),
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
