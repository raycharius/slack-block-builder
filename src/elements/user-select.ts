import { ElementBuilder } from '../base';
import { ElementSlackDto } from '../lib';
import {
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialUser,
  HasPlaceholder,
  MustBuild,
} from '../methods';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../helpers';
import { ElementType } from '../constants';

import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface UserSelectParams {
  actionId?: string;
  initialUser?: string;
  placeholder?: string;
}

export interface UserSelectBuilder extends HasActionId,
  HasConfirm<ConfirmationDialogBuilder>,
  HasEnd,
  HasInitialUser,
  HasPlaceholder,
  MustBuild {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#users_select
 * @@displayName User Select
 */

export class UserSelectBuilder extends ElementBuilder<UserSelectParams> {
  /** @internal */

  public build(): ElementSlackDto {
    return this.getResult(ElementSlackDto, {
      type: ElementType.UserSelect,
      placeholder: getPlainTextObject(this.props.placeholder),
      confirm: getBuilderResult(this.props.confirm),
    });
  }
}

applyMixins(UserSelectBuilder, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialUser,
  HasPlaceholder,
]);
