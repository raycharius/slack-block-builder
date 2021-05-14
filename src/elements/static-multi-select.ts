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
  Build,
} from '../methods';
import {
  applyMixins,
  getPlainTextObject,
  getBuilderResult,
  getBuilderResults,
} from '../helpers';
import { ElementType } from '../constants/element-types';

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
  Placeholder,
  Build {
}

export class StaticMultiSelectBuilder extends ElementBuilderBase<StaticMultiSelectParams> {
  /** @internal */

  public build(): SlackElementDto {
    return this.getResult(SlackElementDto, {
      type: ElementType.StaticMultiSelect,
      placeholder: getPlainTextObject(this.props.placeholder),
      options: getBuilderResults(this.props.options),
      initialOptions: getBuilderResults(this.props.initialOptions),
      optionGroups: getBuilderResults(this.props.optionGroups),
      confirm: getBuilderResult(this.props.confirm),
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
