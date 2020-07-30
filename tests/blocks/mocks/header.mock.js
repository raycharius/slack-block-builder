const { getBlocks, ...Blocks } = require('../../../src/blocks');

const props = {
  text: 'text',
  blockId: 'blockId',
};

const mock = new Blocks.Header({ ...props });

module.exports = { props, mock };
