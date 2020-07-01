const { getBits, ...Bits } = require('../../../src/bits');

const props = {
  color: 'color',
};

const mock = new Bits.Attachment({ ...props });

module.exports = { props, mock };
