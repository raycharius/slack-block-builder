const { StaticSelect: Class, StaticSelectDto: Dto } = require('../../src/elements/static-select');
const { props: classProps } = require('./mocks/static-select.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'StaticSelect';
const group = 'Elements';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.placeholder,
  props.actionId,
  props.options,
  props.optionGroups,
  props.initialOption,
  props.confirm,
];

helper({ config, props: properties });