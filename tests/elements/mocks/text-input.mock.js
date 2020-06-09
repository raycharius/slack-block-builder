const { getElements, ...Elements } = require('../../../src/elements');

const props = {
  placeholder: 'placeholder',
  actionId: 'actionId',
  initialValue: 'initialValue',
  minLength: 100,
  maxLength: 300,
};

const mock = new Elements.TextInput({ ...props });

module.exports = { props, mock };
