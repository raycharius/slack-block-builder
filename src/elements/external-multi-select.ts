import { ElementBuilder } from '../base';
import { ElementSlackDto } from '../lib';
import {
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialOptions,
  HasMaxSelectedItems,
  HasMinQueryLength,
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

export interface ExternalMultiSelectParams {
  actionId?: string;
  maxSelectedItems?: number;
  minQueryLength?: number;
  placeholder?: string;
}

export interface ExternalMultiSelectBuilder extends HasActionId,
  HasConfirm<ConfirmationDialogBuilder>,
  HasEnd,
  HasInitialOptions,
  HasMaxSelectedItems,
  HasMinQueryLength,
  HasPlaceholder,
  MustBuild {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#external_multi_select
 * @@displayName External Multi-Select
 */

export class ExternalMultiSelectBuilder extends ElementBuilder<ExternalMultiSelectParams> {
  /** @internal */

  public build(): ElementSlackDto {
    return this.getResult(ElementSlackDto, {
      type: ElementType.ExternalMultiSelect,
      placeholder: getPlainTextObject(this.props.placeholder),
      initialOptions: getBuilderResults(this.props.initialOptions),
      confirm: getBuilderResult(this.props.confirm),
    });
  }
}

applyMixins(ExternalMultiSelectBuilder, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialOptions,
  HasMaxSelectedItems,
  HasMinQueryLength,
  HasPlaceholder,
]);
