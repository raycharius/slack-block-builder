import { ElementBase } from '../base';
import { SlackDto } from '../lib';
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

import type { ConfirmationDialogBit } from '../bits/confirmation-dialog';

export interface UserSelectParams {
  actionId?: string;
  initialUser?: string;
  placeholder?: string;
}

export interface UserSelectElement extends HasActionId,
  HasConfirm<ConfirmationDialogBit>,
  HasEnd,
  HasInitialUser,
  HasPlaceholder,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/block-elements#users_select}
 */

export class UserSelectElement extends ElementBase implements UserSelectElement {
  constructor(params?: UserSelectParams) {
    super(params);

    this.props.type = ElementType.UserSelect;
  }

  public build(): SlackDto {
    const augmentedProps = {
      placeholder: getPlainTextObject(this.props.placeholder),
      confirm: getBuilderResult(this.props.confirm),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(UserSelectElement, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialUser,
  HasPlaceholder,
]);
