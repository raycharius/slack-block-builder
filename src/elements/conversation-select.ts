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
  FocusOnLoad,
  InitialConversation,
  Placeholder,
  ResponseUrlEnabled,
} from '../methods';
import {
  applyMixins,
  getPlainTextObject,
  getFilter,
  getBuilderResult,
} from '../helpers';
import { ElementType } from '../constants';

import type { SlackDto } from '../lib';
import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

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
 * @@link https://api.slack.com/reference/block-kit/block-elements#conversation_select
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
