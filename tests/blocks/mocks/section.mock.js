const { getBlocks, ...Blocks } = require('../../../src/blocks');

const props = {
  text: 'text',
  blockId: 'blockId',
};

const mock = new Blocks.Section({ ...props });

module.exports = { props, mock };
