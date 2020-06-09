const { getBlocks, ...Blocks } = require('../../../src/blocks');

const props = {
  blockId: 'blockId',
};

const mock = new Blocks.Actions({ ...props });

module.exports = { props, mock };
