import { ElementBuilder } from '../base';
import { SlackDto } from '../lib';
import {
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialUsers,
  HasMaxSelectedItems,
  HasPlaceholder,
  MustBuild,
} from '../methods';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../helpers';

import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface UserMultiSelectParams {
  actionId?: string;
  maxSelectedItems?: number;
  placeholder?: string;
}

export interface UserMultiSelectBuilder extends HasActionId,
  HasConfirm<ConfirmationDialogBuilder>,
  HasEnd,
  HasInitialUsers,
  HasMaxSelectedItems,
  HasPlaceholder,
  MustBuild {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#users_multi_select
 * @@displayName User Multi-Select
 */

export class UserMultiSelectBuilder extends ElementBuilder<UserMultiSelectParams> {
  public build(): SlackDto {
    const augmentedProps = {
      placeholder: getPlainTextObject(this.props.placeholder),
      confirm: getBuilderResult(this.props.confirm),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(UserMultiSelectBuilder, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialUsers,
  HasMaxSelectedItems,
  HasPlaceholder,
]);
