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
  InitialConversations,
  MaxSelectedItems,
  Placeholder,
} from '../internal/methods';

import type { SlackDto } from '../internal/dto';
import type { ConfirmationDialogBuilder } from '../bits';

export interface ConversationMultiSelectParams {
  actionId?: string;
  maxSelectedItems?: string;
  placeholder?: string;
}

export interface ConversationMultiSelectBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  DefaultToCurrentConversation,
  End,
  ExcludeBotUsers,
  ExcludeExternalSharedChannels,
  Filter,
  FocusOnLoad,
  InitialConversations,
  MaxSelectedItems,
  Placeholder {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/multi-select-menu-element#conversation_multi_select
 * @@displayName Conversation Multi-Select
 */

export class ConversationMultiSelectBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
    return this.getResult(SlackElementDto, {
      type: ElementType.ConversationsMultiSelect,
      placeholder: getPlainTextObject(this.props.placeholder),
      confirm: getBuilderResult<SlackDto>(this.props.confirm),
      filter: getFilter(this.props),
    });
  }
}

applyMixins(ConversationMultiSelectBuilder, [
  ActionId,
  Confirm,
  DefaultToCurrentConversation,
  End,
  ExcludeBotUsers,
  ExcludeExternalSharedChannels,
  Filter,
  FocusOnLoad,
  InitialConversations,
  MaxSelectedItems,
  Placeholder,
]);
