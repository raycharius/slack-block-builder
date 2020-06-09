const { getBlocks, ...Blocks } = require('../../../src/blocks');

const props = {
  imageUrl: 'imageUrl',
  altText: 'altText',
  title: 'title',
  blockId: 'blockId',
};

const mock = new Blocks.Image({ ...props });

module.exports = { props, mock };
