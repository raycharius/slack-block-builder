const { getElements, ...Elements } = require('../../../src/elements');

const props = {
  placeholder: 'placeholder',
  actionId: 'actionId',
};

const mock = new Elements.StaticSelect({ ...props });

module.exports = { props, mock };
