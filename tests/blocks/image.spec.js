const { Image: Class, ImageDto: Dto } = require('../../src/blocks/image');
const { props: classProps } = require('./mocks/image.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'Image';
const group = 'Blocks';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.imageUrl,
  props.altText,
  props.title,
  props.blockId,
];

helper({ config, props: properties });