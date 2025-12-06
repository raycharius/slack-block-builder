import { ElementBuilderBase } from '../internal/base';
import { ElementType } from '../internal/constants';
import { SlackElementDto } from '../internal/dto';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../internal/helpers';
import {
  ActionId,
  Confirm,
  End,
  FocusOnLoad,
  InitialUser,
  Placeholder,
} from '../internal/methods';

import type { ConfirmationDialogBuilder } from '../bits';

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
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/select-menu-element#users_select
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
