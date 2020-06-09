const { getElements, ...Elements } = require('../../../src/elements');

const props = {
  placeholder: 'placeholder',
  actionId: 'actionId',
  minQueryLength: 3,
  maxSelectedItems: 50,
};

const mock = new Elements.ExternalMultiSelect({ ...props });

module.exports = { props, mock };
