import { ElementBase } from '../base';
import { SlackDto } from '../lib';
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

import type { ConfirmationDialogBit } from '../bits/confirmation-dialog';

export interface StaticMultiSelectParams {
  actionId?: string;
  maxSelectedItems?: number;
  placeholder?: string;
}

/**
 * {@link https://api.slack.com/reference/block-kit/block-elements#static_multi_select}
 */

export interface StaticMultiSelectElement extends HasActionId,
  HasConfirm<ConfirmationDialogBit>,
  HasEnd,
  HasInitialOptions,
  HasMaxSelectedItems,
  HasOptionGroups,
  HasOptions,
  HasPlaceholder,
  MustBuild {
}

export class StaticMultiSelectElement extends ElementBase implements StaticMultiSelectElement {
  constructor(params?: StaticMultiSelectParams) {
    super(params);

    this.props.type = ElementType.StaticMultiSelect;
  }

  public build(): SlackDto {
    const augmentedProps = {
      placeholder: getPlainTextObject(this.props.placeholder),
      options: getBuilderResults(this.props.options),
      initialOptions: getBuilderResults(this.props.initialOptions),
      optionGroups: getBuilderResults(this.props.optionGroups),
      confirm: getBuilderResult(this.props.confirm),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(StaticMultiSelectElement, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialOptions,
  HasMaxSelectedItems,
  HasOptionGroups,
  HasOptions,
  HasPlaceholder,
]);
