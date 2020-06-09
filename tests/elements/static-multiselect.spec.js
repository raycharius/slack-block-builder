const { StaticMultiSelect: Class, StaticMultiSelectDto: Dto } = require('../../src/elements/static-multiselect');
const { props: classProps } = require('./mocks/static-multiselect.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'StaticMultiSelect';
const group = 'Elements';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.placeholder,
  props.actionId,
  props.options,
  props.optionGroups,
  props.initialOptions,
  props.confirm,
  props.maxSelectedItems,
];

helper({ config, props: properties });