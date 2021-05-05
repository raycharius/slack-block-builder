import { ElementBase } from '../base';
import { SlackDto } from '../lib';
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

import type { ConfirmationDialogBit } from '../bits/confirmation-dialog';

export interface ConversationMultiSelectParams {
  actionId?: string;
  maxSelectedItems?: string;
  placeholder?: string;
}

export interface ConversationMultiSelectElement extends HasActionId,
  HasConfirm<ConfirmationDialogBit>,
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
 * {@link https://api.slack.com/reference/block-kit/block-elements#conversation_multi_select}
 */

export class ConversationMultiSelectElement extends ElementBase
  implements ConversationMultiSelectElement {
  constructor(params?: ConversationMultiSelectParams) {
    super(params);

    this.props.type = ElementType.ConversationsMultiSelect;
  }

  public build(): SlackDto {
    const augmentedProps = {
      placeholder: getPlainTextObject(this.props.placeholder),
      confirm: getBuilderResult(this.props.confirm),
      filter: getFilter(this.props),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(ConversationMultiSelectElement, [
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
