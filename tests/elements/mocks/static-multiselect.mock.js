const { getElements, ...Elements } = require('../../../src/elements');

const props = {
  placeholder: 'placeholder',
  actionId: 'actionId',
  maxSelectedItems: 50,
};

const mock = new Elements.StaticMultiSelect({ ...props });

module.exports = { props, mock };
