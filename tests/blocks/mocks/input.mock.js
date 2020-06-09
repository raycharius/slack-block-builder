const { getBlocks, ...Blocks } = require('../../../src/blocks');

const props = {
  label: 'label',
  blockId: 'blockId',
  hint: 'hint',
};

const mock = new Blocks.Input({ ...props });

module.exports = { props, mock };
