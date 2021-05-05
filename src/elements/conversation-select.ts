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
import { ElementType } from '../constants';

import type { ConfirmationDialogBit } from '../bits/confirmation-dialog';

export interface ConversationSelectParams {
  actionId?: string;
  maxSelectedItems?: string;
  placeholder?: string;
}

export interface ConversationSelectElement extends HasActionId,
  HasConfirm<ConfirmationDialogBit>,
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
