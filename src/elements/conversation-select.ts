import { ElementBuilder } from '../base';
import { SlackDto } from '../lib';
import {
  HasActionId,
  HasConfirm,
  HasDefaultToCurrentConversation,
  HasEnd,
  HasExcludeBotUsers,
  HasExcludeExternalSharedChannels,
  HasFilter,
  HasInitialConversation,
  HasPlaceholder,
  HasResponseUrlEnabled,
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

export interface ConversationSelectParams {
  actionId?: string;
  maxSelectedItems?: string;
  placeholder?: string;
}

export interface ConversationSelectBuilder extends HasActionId,
  HasConfirm<ConfirmationDialogBuilder>,
  HasDefaultToCurrentConversation,
  HasEnd,
  HasExcludeBotUsers,
  HasExcludeExternalSharedChannels,
  HasFilter,
  HasInitialConversation,
  HasPlaceholder,
  HasResponseUrlEnabled,
  MustBuild {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#conversation_select
 * @@displayName Conversation Select
 */

export class ConversationSelectBuilder extends ElementBuilder {
  constructor(params?: ConversationSelectParams) {
    super(params);

    this.props.type = ElementType.ConversationSelect;
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

applyMixins(ConversationSelectBuilder, [
  HasActionId,
  HasConfirm,
  HasDefaultToCurrentConversation,
  HasEnd,
  HasExcludeBotUsers,
  HasExcludeExternalSharedChannels,
  HasFilter,
  HasInitialConversation,
  HasPlaceholder,
  HasResponseUrlEnabled,
  HasPlaceholder,
]);
