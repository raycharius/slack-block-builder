const { Option: Class, OptionDto: Dto } = require('../../src/bits/option');
const { props: classProps } = require('./mocks/option.mock');
const helper = require('../helper');
const props = require('../props');

const className = 'Option';
const group = 'Bits';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.text,
  props.value,
  props.description,
  props.url,
];

helper({ config, props: properties });