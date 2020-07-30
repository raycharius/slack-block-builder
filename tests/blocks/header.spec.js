const { Header: Class, HeaderDto: Dto } = require('../../src/blocks/header');
const { props: classProps } = require('./mocks/header.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'Header';
const group = 'Blocks';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.text,
  props.blockId,
];

helper({ config, props: properties });