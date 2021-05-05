import { ElementBase } from '../base';
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
import { ElementType } from '../constants';

import type { ConfirmationDialogBit } from '../bits/confirmation-dialog';

export interface UserMultiSelectParams {
  actionId?: string;
  maxSelectedItems?: number;
  placeholder?: string;
}

export interface UserMultiSelectElement extends HasActionId,
  HasConfirm<ConfirmationDialogBit>,
  HasEnd,
  HasInitialUsers,
  HasMaxSelectedItems,
  HasPlaceholder,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/block-elements#users_multi_select}
 */

export class UserMultiSelectElement extends ElementBase implements UserMultiSelectElement {
  constructor(params?: UserMultiSelectParams) {
    super(params);

    this.props.type = ElementType.UsersMultiSelect;
  }

  public build(): SlackDto {
    const augmentedProps = {
      placeholder: getPlainTextObject(this.props.placeholder),
      confirm: getBuilderResult(this.props.confirm),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(UserMultiSelectElement, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialUsers,
  HasMaxSelectedItems,
  HasPlaceholder,
]);