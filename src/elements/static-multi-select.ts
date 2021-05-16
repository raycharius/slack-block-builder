import { ElementBuilderBase } from '../base';
import { SlackElementDto } from '../lib';
import {
  ActionId,
  Confirm,
  End,
  InitialOptions,
  MaxSelectedItems,
  OptionGroups,
  Options,
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

export interface StaticMultiSelectParams {
  actionId?: string;
  maxSelectedItems?: number;
  placeholder?: string;
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#static_multi_select
 * @@displayName Static Multi-Select
 */

export interface StaticMultiSelectBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  InitialOptions,
  MaxSelectedItems,
  OptionGroups,
  Options,
  Placeholder {
}

export class StaticMultiSelectBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): SlackElementDto {
    return this.getResult(SlackElementDto, {
      type: ElementType.StaticMultiSelect,
      placeholder: getPlainTextObject(this.props.placeholder),
      options: getBuilderResults<SlackDto>(this.props.options),
      initialOptions: getBuilderResults<SlackDto>(this.props.initialOptions),
      optionGroups: getBuilderResults<SlackDto>(this.props.optionGroups),
      confirm: getBuilderResult<SlackDto>(this.props.confirm),
    });
  }
}

applyMixins(StaticMultiSelectBuilder, [
  ActionId,
  Confirm,
  End,
  InitialOptions,
  MaxSelectedItems,
  OptionGroups,
  Options,
  Placeholder,
]);
