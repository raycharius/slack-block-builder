import { ElementBuilderBase } from '../base';
import { SlackElementDto } from '../lib';
import {
  ActionId,
  Confirm,
  End,
  InitialOptions,
  MaxSelectedItems,
  MinQueryLength,
  Placeholder,
} from '../methods';
import {
  applyMixins,
  getPlainTextObject,
  getBuilderResult,
  getBuilderResults,
} from '../helpers';
import { ElementType } from '../constants';

import type { SlackDto } from '../lib';
import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface ExternalMultiSelectParams {
  actionId?: string;
  maxSelectedItems?: number;
  minQueryLength?: number;
  placeholder?: string;
}

export interface ExternalMultiSelectBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  InitialOptions,
  MaxSelectedItems,
  MinQueryLength,
  Placeholder {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#external_multi_select
 * @@displayName External Multi-Select
 */

export class ExternalMultiSelectBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
    return this.getResult(SlackElementDto, {
      type: ElementType.ExternalMultiSelect,
      placeholder: getPlainTextObject(this.props.placeholder),
      initialOptions: getBuilderResults<SlackDto>(this.props.initialOptions),
      confirm: getBuilderResult<SlackDto>(this.props.confirm),
    });
  }
}

applyMixins(ExternalMultiSelectBuilder, [
  ActionId,
  Confirm,
  End,
  InitialOptions,
  MaxSelectedItems,
  MinQueryLength,
  Placeholder,
]);
