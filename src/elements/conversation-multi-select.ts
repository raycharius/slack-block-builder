import { ElementBuilderBase } from '../base';
import { SlackElementDto } from '../lib';
import {
  ActionId,
  Confirm,
  DefaultToCurrentConversation,
  End,
  ExcludeBotUsers,
  ExcludeExternalSharedChannels,
  Filter,
  InitialConversations,
  MaxSelectedItems,
  Placeholder,
  Build,
} from '../methods';
import {
  applyMixins,
  getPlainTextObject,
  getFilter,
  getBuilderResult,
} from '../helpers';
import { ElementType } from '../constants';

import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

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
  InitialConversations,
  MaxSelectedItems,
  Placeholder,
  Build {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#conversation_multi_select
 * @@displayName Conversation Multi-Select
 */

export class ConversationMultiSelectBuilder extends ElementBuilderBase<ConversationMultiSelectParams> {
  /** @internal */

  public build(): SlackElementDto {
    return this.getResult(SlackElementDto, {
      type: ElementType.ConversationsMultiSelect,
      placeholder: getPlainTextObject(this.props.placeholder),
      confirm: getBuilderResult(this.props.confirm),
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
  InitialConversations,
  MaxSelectedItems,
  Placeholder,
]);
