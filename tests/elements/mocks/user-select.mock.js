const { getElements, ...Elements } = require('../../../src/elements');

const props = {
  placeholder: 'placeholder',
  actionId: 'actionId',
  initialUser: 'initialUser',
};

const mock = new Elements.UserSelect({ ...props });

module.exports = { props, mock };
