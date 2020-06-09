const { getElements, ...Elements } = require('../../../src/elements');

const props = {
  placeholder: 'placeholder',
  actionId: 'actionId',
  initialConversation: 'initialConversation',
};

const mock = new Elements.ConversationSelect({ ...props });

module.exports = { props, mock };
