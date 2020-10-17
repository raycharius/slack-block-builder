const { getElements, ...Elements } = require('../../../src/elements');

const props = {
  placeholder: 'placeholder',
  actionId: 'actionId',
  initialTime: '21:45',
};

const mock = new Elements.TimePicker({ ...props });

module.exports = { props, mock };
