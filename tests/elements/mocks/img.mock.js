const { getElements, ...Elements } = require('../../../src/elements');

const props = {
  imageUrl: 'imageUrl',
  altText: 'altText',
};

const mock = new Elements.Img({ ...props });

module.exports = { props, mock };
