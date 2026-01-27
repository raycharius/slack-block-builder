import { ElementBuilderBase } from '../internal/base';
import { ElementType } from '../internal/constants';
import { SlackElementDto } from '../internal/dto';
import { applyMixins, getBuilderResult, getBuilderResults } from '../internal/helpers';
import {
  ActionId,
  Confirm,
  End,
  FocusOnLoad,
  InitialOptions,
  Options,
} from '../internal/methods';

import type { SlackDto } from '../internal/dto';
import type { ConfirmationDialogBuilder } from '../bits';

export interface CheckboxesParams {
  actionId?: string;
}

export interface CheckboxesBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  FocusOnLoad,
  InitialOptions,
  Options {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/checkboxes-element
 * @@displayName Checkboxes
 */

export class CheckboxesBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
    return this.getResult(SlackElementDto, {
      type: ElementType.Checkboxes,
      options: getBuilderResults<SlackDto>(this.props.options, { isMarkdown: true }),
      initialOptions: getBuilderResults<SlackDto>(this.props.initialOptions, { isMarkdown: true }),
      confirm: getBuilderResult<SlackDto>(this.props.confirm),
    });
  }
}

applyMixins(CheckboxesBuilder, [
  ActionId,
  Confirm,
  End,
  FocusOnLoad,
  InitialOptions,
  Options,
]);
