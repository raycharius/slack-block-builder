import { ElementBuilder } from '../base';
import { ElementSlackDto } from '../lib';
import {
  ActionId,
  Confirm,
  End,
  InitialOptions,
  Options,
  Build,
} from '../methods';
import { applyMixins, getBuilderResult, getBuilderResults } from '../helpers';
import { ElementType } from '../constants';

import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface CheckboxesParams {
  actionId?: string;
}

export interface CheckboxesBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  InitialOptions,
  Options,
  Build {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#checkboxes
 * @@displayName Checkboxes
 */

export class CheckboxesBuilder extends ElementBuilder<CheckboxesParams> {
  /** @internal */

  public build(): ElementSlackDto {
    return this.getResult(ElementSlackDto, {
      type: ElementType.Checkboxes,
      options: getBuilderResults(this.props.options, { isMarkdown: true }),
      initialOptions: getBuilderResults(this.props.initialOptions, { isMarkdown: true }),
      confirm: getBuilderResult(this.props.confirm),
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
