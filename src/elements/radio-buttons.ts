import { ElementBuilderBase } from '../internal/base';
import { ElementType } from '../internal/constants';
import { SlackElementDto } from '../internal/dto';
import { applyMixins, getBuilderResult, getBuilderResults } from '../internal/helpers';
import {
  ActionId,
  Confirm,
  End,
  FocusOnLoad,
  InitialOption,
  Options,
} from '../internal/methods';

import type { SlackDto } from '../internal/dto';
import type { ConfirmationDialogBuilder } from '../bits';

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
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/radio-button-group-element
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
