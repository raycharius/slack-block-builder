const { getBlocks, ...Blocks } = require('../../../src/blocks');

const props = {
  blockId: 'blockId',
};

const mock = new Blocks.Divider({ ...props });

module.exports = { props, mock };
