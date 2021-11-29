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
  InitialUser,
  Placeholder,
} from '../methods';
import { ElementType } from '../constants';

import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface UserSelectParams {
  actionId?: string;
  initialUser?: string;
  placeholder?: string;
}

export interface UserSelectBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  FocusOnLoad,
  InitialUser,
  Placeholder {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#users_select
 * @@displayName User Select
 */

export class UserSelectBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
    return this.getResult(SlackElementDto, {
      type: ElementType.UserSelect,
      placeholder: getPlainTextObject(this.props.placeholder),
      confirm: getBuilderResult(this.props.confirm),
    });
  }
}

applyMixins(UserSelectBuilder, [
  ActionId,
  Confirm,
  End,
  FocusOnLoad,
  InitialUser,
  Placeholder,
]);
