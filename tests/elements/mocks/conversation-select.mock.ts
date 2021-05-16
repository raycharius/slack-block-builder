import { ConversationSelectBuilder } from '../../../src/elements/conversation-select';

export const params = {
  placeholder: 'placeholder',
  actionId: 'actionId',
  initialConversation: 'initialConversation',
};

export const mock = new ConversationSelectBuilder(params);
