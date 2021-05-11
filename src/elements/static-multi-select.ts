import { ElementBuilder } from '../base';
import { ElementSlackDto } from '../lib';
import {
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialOptions,
  HasMaxSelectedItems,
  HasOptionGroups,
  HasOptions,
  HasPlaceholder,
  MustBuild,
} from '../methods';
import {
  applyMixins,
  getPlainTextObject,
  getBuilderResult,
  getBuilderResults,
} from '../helpers';
import { ElementType } from '../constants';

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

export interface StaticMultiSelectBuilder extends HasActionId,
  HasConfirm<ConfirmationDialogBuilder>,
  HasEnd,
  HasInitialOptions,
  HasMaxSelectedItems,
  HasOptionGroups,
  HasOptions,
  HasPlaceholder,
  MustBuild {
}

export class StaticMultiSelectBuilder extends ElementBuilder<StaticMultiSelectParams> {
  /** @internal */

  public build(): ElementSlackDto {
    return this.getResult(ElementSlackDto, {
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
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialOptions,
  HasMaxSelectedItems,
  HasOptionGroups,
  HasOptions,
  HasPlaceholder,
]);
