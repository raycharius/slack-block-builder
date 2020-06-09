const { ConversationMultiSelect: Class, ConversationMultiSelectDto: Dto } = require('../../src/elements/conversations-multiselect');
const { props: classProps } = require('./mocks/conversation-multiselect.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'ConversationMultiSelect';
const group = 'Elements';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.placeholder,
  props.actionId,
  props.initialConversations,
  props.defaultToCurrentConversation,
  props.confirm,
  props.maxSelectedItems,
  props.filter,
  props.excludeBotUsers,
  props.excludeExternalSharedChannels
];

helper({ config, props: properties });