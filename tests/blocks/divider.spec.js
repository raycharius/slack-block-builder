const { Divider: Class, DividerDto: Dto } = require('../../src/blocks/divider');
const { props: classProps } = require('./mocks/divider.mock')
const props = require('../props');
const helper = require('../helper');

const className = 'Divider';
const group = 'Blocks';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.blockId,
];

helper({ config, props: properties });