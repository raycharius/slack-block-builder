const { getElements, ...Elements } = require('../../../src/elements');

const props = {
  placeholder: 'placeholder',
  actionId: 'actionId',
  initialChannel: 'initialChannel',
};

const mock = new Elements.ChannelSelect({ ...props });

module.exports = { props, mock };
