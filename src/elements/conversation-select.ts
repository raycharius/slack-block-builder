import { ElementBuilderBase } from '../internal/base';
import { ElementType } from '../internal/constants';
import { SlackElementDto } from '../internal/dto';
import {
  applyMixins,
  getPlainTextObject,
  getFilter,
  getBuilderResult,
} from '../internal/helpers';
import {
  ActionId,
  Confirm,
  DefaultToCurrentConversation,
  End,
  ExcludeBotUsers,
  ExcludeExternalSharedChannels,
  Filter,
  FocusOnLoad,
  InitialConversation,
  Placeholder,
  ResponseUrlEnabled,
} from '../internal/methods';

import type { SlackDto } from '../internal/dto';
import type { ConfirmationDialogBuilder } from '../bits';

export interface ConversationSelectParams {
  actionId?: string;
  maxSelectedItems?: string;
  placeholder?: string;
}

export interface ConversationSelectBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  DefaultToCurrentConversation,
  End,
  ExcludeBotUsers,
  ExcludeExternalSharedChannels,
  Filter,
  FocusOnLoad,
  InitialConversation,
  Placeholder,
  ResponseUrlEnabled {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/select-menu-element#conversations_select
 * @@displayName Conversation Select
 */

export class ConversationSelectBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
    return this.getResult(SlackElementDto, {
      type: ElementType.ConversationSelect,
      placeholder: getPlainTextObject(this.props.placeholder),
      confirm: getBuilderResult<SlackDto>(this.props.confirm),
      filter: getFilter(this.props),
    });
  }
}

applyMixins(ConversationSelectBuilder, [
  ActionId,
  Confirm,
  DefaultToCurrentConversation,
  End,
  ExcludeBotUsers,
  ExcludeExternalSharedChannels,
  Filter,
  FocusOnLoad,
  InitialConversation,
  Placeholder,
  ResponseUrlEnabled,
  Placeholder,
]);
