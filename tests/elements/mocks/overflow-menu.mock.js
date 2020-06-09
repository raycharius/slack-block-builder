const { getElements, ...Elements } = require('../../../src/elements');

const props = {
  actionId: 'actionId',
};

const mock = new Elements.OverflowMenu({ ...props });

module.exports = { props, mock };
