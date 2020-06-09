const { getElements, ...Elements } = require('../../../src/elements');

const props = {
  text: 'text',
  actionId: 'actionId',
  url: 'url',
  value: 'value',
};

const mock = new Elements.Button({ ...props }).danger();

module.exports = { props, mock };
