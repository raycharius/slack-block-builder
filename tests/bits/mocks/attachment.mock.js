const { getBits, ...Bits } = require('../../../src/bits');

const props = {
  color: 'color',
  fallback: 'fallback',
};

const mock = new Bits.Attachment({ ...props });

module.exports = { props, mock };
