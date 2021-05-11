import { ElementBuilder } from '../base';
import { ElementSlackDto } from '../lib';
import {
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialOption,
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

export interface StaticSelectParams {
  actionId?: string;
  placeholder?: string;
}

export interface StaticSelectBuilder extends HasActionId,
  HasConfirm<ConfirmationDialogBuilder>,
  HasEnd,
  HasInitialOption,
  HasOptionGroups,
  HasOptions,
  HasPlaceholder,
  MustBuild {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#static_select
 * @@displayName Static Select
 */

export class StaticSelectBuilder extends ElementBuilder<StaticSelectParams> {
  /** @internal */

  public build(): ElementSlackDto {
    return this.getResult(ElementSlackDto, {
      type: ElementType.StaticSelect,
      placeholder: getPlainTextObject(this.props.placeholder),
      options: getBuilderResults(this.props.options),
      optionGroups: getBuilderResults(this.props.optionGroups),
      initialOption: getBuilderResult(this.props.initialOption),
      confirm: getBuilderResult(this.props.confirm),
    });
  }
}

applyMixins(StaticSelectBuilder, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialOption,
  HasOptionGroups,
  HasOptions,
  HasPlaceholder,
]);
