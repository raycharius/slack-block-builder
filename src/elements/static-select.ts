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
  InitialOption,
  OptionGroups,
  Options,
  Placeholder,
} from '../internal/methods';

import type { SlackDto } from '../internal/dto';
import type { ConfirmationDialogBuilder } from '../bits';

export interface StaticSelectParams {
  actionId?: string;
  placeholder?: string;
}

export interface StaticSelectBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  FocusOnLoad,
  InitialOption,
  OptionGroups,
  Options,
  Placeholder {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/select-menu-element#static_select
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
  FocusOnLoad,
  InitialOption,
  OptionGroups,
  Options,
  Placeholder,
]);
