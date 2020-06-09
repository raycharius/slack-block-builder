const { Input: Class, InputDto: Dto } = require('../../src/blocks/input');
const { props: classProps } = require('./mocks/input.mock')
const props = require('../props');
const helper = require('../helper');

const className = 'Input';
const group = 'Blocks';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.label,
  props.element,
  props.blockId,
  props.hint,
  props.optional,
];

helper({ config, props: properties });