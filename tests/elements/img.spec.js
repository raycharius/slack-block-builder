const { Img: Class, ImgDto: Dto } = require('../../src/elements/img');
const { props: classProps } = require('./mocks/img.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'Img';
const group = 'Elements';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.imageUrl,
  props.altText,
];

helper({ config, props: properties });
