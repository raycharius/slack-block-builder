import { ElementBuilder } from '../base';
import { ElementSlackDto } from '../lib';
import {
  HasActionId,
  HasConfirm,
  HasDefaultToCurrentConversation,
  HasEnd,
  HasExcludeBotUsers,
  HasExcludeExternalSharedChannels,
  HasFilter,
  HasInitialConversations,
  HasMaxSelectedItems,
  HasPlaceholder,
  MustBuild,
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

export interface ConversationMultiSelectBuilder extends HasActionId,
  HasConfirm<ConfirmationDialogBuilder>,
  HasDefaultToCurrentConversation,
  HasEnd,
  HasExcludeBotUsers,
  HasExcludeExternalSharedChannels,
  HasFilter,
  HasInitialConversations,
  HasMaxSelectedItems,
  HasPlaceholder,
  MustBuild {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#conversation_multi_select
 * @@displayName Conversation Multi-Select
 */

export class ConversationMultiSelectBuilder extends ElementBuilder<ConversationMultiSelectParams> {
  /** @internal */

  public build(): ElementSlackDto {
    return this.getResult(ElementSlackDto, {
      type: ElementType.ConversationsMultiSelect,
      placeholder: getPlainTextObject(this.props.placeholder),
      confirm: getBuilderResult(this.props.confirm),
      filter: getFilter(this.props),
    });
  }
}

applyMixins(ConversationMultiSelectBuilder, [
  HasActionId,
  HasConfirm,
  HasDefaultToCurrentConversation,
  HasEnd,
  HasExcludeBotUsers,
  HasExcludeExternalSharedChannels,
  HasFilter,
  HasInitialConversations,
  HasMaxSelectedItems,
  HasPlaceholder,
]);
