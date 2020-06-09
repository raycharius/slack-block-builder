const { getBlocks, ...Blocks } = require('../../../src/blocks');

const props = {
  blockId: 'blockId',
};

const mock = new Blocks.Context({ ...props });

module.exports = { props, mock };
