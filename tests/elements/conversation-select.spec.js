const { ConversationSelect: Class, ConversationSelectDto: Dto } = require('../../src/elements/conversations-select');
const { props: classProps } = require('./mocks/conversation-select.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'ConversationSelect';
const group = 'Elements';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.placeholder,
  props.actionId,
  props.initialConversation,
  props.defaultToCurrentConversation,
  props.confirm,
  props.responseUrlEnabled,
  props.filter,
  props.excludeExternalSharedChannels,
  props.excludeBotUsers,
];

helper({ config, props: properties });