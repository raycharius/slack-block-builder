const { getBits, ...Bits } = require('../../../src/bits');

const props = {
  title: 'title',
  text: 'title',
  confirm: 'confirm',
  deny: 'deny',
};

const mock = new Bits.ConfirmationDialog({ ...props }).danger();

module.exports = { props, mock };
