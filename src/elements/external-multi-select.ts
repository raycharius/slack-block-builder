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
  MinQueryLength,
  Placeholder,
} from '../internal/methods';

import type { SlackDto } from '../internal/dto';
import type { ConfirmationDialogBuilder } from '../bits';

export interface ExternalMultiSelectParams {
  actionId?: string;
  maxSelectedItems?: number;
  minQueryLength?: number;
  placeholder?: string;
}

export interface ExternalMultiSelectBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  FocusOnLoad,
  InitialOptions,
  MaxSelectedItems,
  MinQueryLength,
  Placeholder {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/multi-select-menu-element#external_multi_select
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
  FocusOnLoad,
  InitialOptions,
  MaxSelectedItems,
  MinQueryLength,
  Placeholder,
]);
