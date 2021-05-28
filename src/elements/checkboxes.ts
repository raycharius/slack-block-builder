import { ElementBuilderBase } from '../base';
import { SlackElementDto } from '../lib';
import {
  ActionId,
  Confirm,
  End,
  InitialOptions,
  Options,
} from '../methods';
import { applyMixins, getBuilderResult, getBuilderResults } from '../helpers';
import { ElementType } from '../constants';

import type { SlackDto } from '../lib';
import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface CheckboxesParams {
  actionId?: string;
}

export interface CheckboxesBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  InitialOptions,
  Options{
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#checkboxes
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
  InitialOptions,
  Options,
]);
