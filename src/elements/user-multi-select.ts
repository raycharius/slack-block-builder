import {
  applyMixins,
  getPlainTextObject,
  getBuilderResult,
  ElementBuilderBase,
  SlackElementDto,
} from '../lib';
import {
  ActionId,
  Confirm,
  End,
  FocusOnLoad,
  InitialUsers,
  MaxSelectedItems,
  Placeholder,
} from '../methods';
import { ElementType } from '../constants';

import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

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
 * @@link https://api.slack.com/reference/block-kit/block-elements#users_multi_select
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
