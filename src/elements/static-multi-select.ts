import { ElementBuilderBase } from '../internal/base';
import { ElementType } from '../internal/constants';
import { SlackElementDto } from '../internal/dto';
import {
  applyMixins,
  getPlainTextObject,
  getBuilderResult,
  getBuilderResults,
} from '../internal/helpers';
import {
  ActionId,
  Confirm,
  End,
  FocusOnLoad,
  InitialOptions,
  MaxSelectedItems,
  OptionGroups,
  Options,
  Placeholder,
} from '../internal/methods';

import type { SlackDto } from '../internal/dto';
import type { ConfirmationDialogBuilder } from '../bits';

export interface StaticMultiSelectParams {
  actionId?: string;
  maxSelectedItems?: number;
  placeholder?: string;
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/multi-select-menu-element#static_multi_select
 * @@displayName Static Multi-Select
 */

export interface StaticMultiSelectBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  FocusOnLoad,
  InitialOptions,
  MaxSelectedItems,
  OptionGroups,
  Options,
  Placeholder {
}

export class StaticMultiSelectBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
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
  FocusOnLoad,
  InitialOptions,
  MaxSelectedItems,
  OptionGroups,
  Options,
  Placeholder,
]);
