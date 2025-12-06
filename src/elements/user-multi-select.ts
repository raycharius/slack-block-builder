import { ElementBuilderBase } from '../internal/base';
import { ElementType } from '../internal/constants';
import { SlackElementDto } from '../internal/dto';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../internal/helpers';
import {
  ActionId,
  Confirm,
  End,
  FocusOnLoad,
  InitialUsers,
  MaxSelectedItems,
  Placeholder,
} from '../internal/methods';

import type { ConfirmationDialogBuilder } from '../bits';

export interface UserMultiSelectParams {
  actionId?: string;
  maxSelectedItems?: number;
  placeholder?: string;
}

export interface UserMultiSelectBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  FocusOnLoad,
  InitialUsers,
  MaxSelectedItems,
  Placeholder {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/multi-select-menu-element#users_multi_select
 * @@displayName User Multi-Select
 */

export class UserMultiSelectBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
    return this.getResult(SlackElementDto, {
      type: ElementType.UserMultiSelect,
      placeholder: getPlainTextObject(this.props.placeholder),
      confirm: getBuilderResult(this.props.confirm),
    });
  }
}

applyMixins(UserMultiSelectBuilder, [
  ActionId,
  Confirm,
  End,
  FocusOnLoad,
  InitialUsers,
  MaxSelectedItems,
  Placeholder,
]);
