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
import { objectTypes } from '../constants';

export interface ConversationSelectParams {
  actionId?: string;
  maxSelectedItems?: string;
  placeholder?: string;
}

export interface ConversationSelectElement extends HasActionId,
  HasConfirm,
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
 * {@link https://api.slack.com/reference/block-kit/block-elements#conversation_select}
 */

export class ConversationSelectElement extends ElementBase implements ConversationSelectElement {
  constructor(params?: ConversationSelectParams) {
    super(params);

    this.props.type = objectTypes.elements.conversationSelect;
  }

  public build(): SlackDto {
    const augmentedProps = {
      placeholder: getPlainTextObject(this.props.placeholder),
      confirm: getBuilderResult(this.props.confirm),
      filter: getFilter(this.props),
    };

    return this.getResult(SlackDto, augmentedProps);
  }
}

applyMixins(ConversationSelectElement, [
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
