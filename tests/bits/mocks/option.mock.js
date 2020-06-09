const { getBits, ...Bits } = require('../../../src/bits');

const props = {
  text: 'text',
  value: 'value',
  description: 'description',
  url: 'url',
};

const mock = new Bits.Option({ ...props });

module.exports = { props, mock };
