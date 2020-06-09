const { getBits, ...Bits } = require('../../../src/bits');

const data = ['Some Value 1', 'Some Value 2', 'Some Value 3'];

const props = {
  label: 'label',
};

const mock = new Bits.OptionGroup({ ...props })
  .options(data.map((item) => new Bits.Option({ text: item, value: item })));

module.exports = { props, mock };