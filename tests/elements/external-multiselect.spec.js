const { ExternalMultiSelect: Class, ExternalMultiSelectDto: Dto } = require('../../src/elements/external-multiselect');
const { props: classProps } = require('./mocks/external-multiselect.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'ExternalMultiSelect';
const group = 'Elements';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.placeholder,
  props.actionId,
  props.minQueryLength,
  props.initialOptions,
  props.confirm,
  props.maxSelectedItems,
];

helper({ config, props: properties });