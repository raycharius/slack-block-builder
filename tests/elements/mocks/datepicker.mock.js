const { getElements, ...Elements } = require('../../../src/elements');

const props = {
  placeholder: 'placeholder',
  actionId: 'actionId',
  initialDate: new Date(),
};

const mock = new Elements.DatePicker({ ...props });

module.exports = { props, mock };
