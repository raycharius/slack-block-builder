const { getElements, ...Elements } = require('../../../src/elements');

const props = {
  placeholder: 'placeholder',
  actionId: 'actionId',
  minQueryLength: 3,
};

const mock = new Elements.ExternalSelect({ ...props });

module.exports = { props, mock };
