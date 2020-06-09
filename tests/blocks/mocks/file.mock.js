const { getBlocks, ...Blocks } = require('../../../src/blocks');

const props = {
  externalId: 'externalId',
  blockId: 'blockId',
};

const mock = new Blocks.File({ ...props });

module.exports = { props, mock };
