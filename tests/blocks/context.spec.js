const { Context: Class, ContextDto: Dto } = require('../../src/blocks/context');
const { props: classProps } = require('./mocks/context.mock')
const props = require('../props');
const helper = require('../helper');

const className = 'Context';
const group = 'Blocks';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.elements,
  props.blockId,
];

helper({ config, props: properties });