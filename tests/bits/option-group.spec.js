const { OptionGroup: Class, OptionGroupDto: Dto } = require('../../src/bits/option-group');
const { props: classProps } = require('./mocks/option-group.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'OptionGroup';
const group = 'Bits';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.label,
  props.options,
];

helper({ config, props: properties });