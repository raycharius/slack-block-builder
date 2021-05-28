import { ElementBuilderBase } from '../base';
import { SlackElementDto } from '../lib';
import {
  ActionId,
  Confirm,
  End,
  InitialOption,
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

export interface StaticSelectParams {
  actionId?: string;
  placeholder?: string;
}

export interface StaticSelectBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  InitialOption,
  OptionGroups,
  Options,
  Placeholder {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#static_select
 * @@displayName Static Select
 */

export class StaticSelectBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
    return this.getResult(SlackElementDto, {
      type: ElementType.StaticSelect,
      placeholder: getPlainTextObject(this.props.placeholder),
      options: getBuilderResults<SlackDto>(this.props.options),
      optionGroups: getBuilderResults<SlackDto>(this.props.optionGroups),
      initialOption: getBuilderResult<SlackDto>(this.props.initialOption),
      confirm: getBuilderResult<SlackDto>(this.props.confirm),
    });
  }
}

applyMixins(StaticSelectBuilder, [
  ActionId,
  Confirm,
  End,
  InitialOption,
  OptionGroups,
  Options,
  Placeholder,
]);
