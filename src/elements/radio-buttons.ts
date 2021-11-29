import {
  applyMixins,
  getBuilderResult,
  getBuilderResults,
  ElementBuilderBase,
  SlackElementDto,
} from '../lib';
import {
  ActionId,
  Confirm,
  End,
  FocusOnLoad,
  InitialOption,
  Options,
} from '../methods';
import { ElementType } from '../constants';

import type { SlackDto } from '../lib';
import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface RadioButtonsParams {
  actionId?: string;
}

export interface RadioButtonsBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  FocusOnLoad,
  InitialOption,
  Options {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#radio
 * @@displayName Radio Buttons
 */

export class RadioButtonsBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
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
  FocusOnLoad,
  InitialOption,
  Options,
]);
