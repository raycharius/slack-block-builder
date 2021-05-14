import { ElementBuilderBase } from '../base';
import { SlackElementDto } from '../lib';
import {
  ActionId,
  Confirm,
  End,
  InitialUser,
  Placeholder,
  Build,
} from '../methods';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../helpers';
import { ElementType } from '../constants/element-types';

import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface UserSelectParams {
  actionId?: string;
  initialUser?: string;
  placeholder?: string;
}

export interface UserSelectBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  InitialUser,
  Placeholder,
  Build {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#users_select
 * @@displayName User Select
 */

export class UserSelectBuilder extends ElementBuilderBase<UserSelectParams> {
  /** @internal */

  public build(): SlackElementDto {
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
  InitialUser,
  Placeholder,
]);
