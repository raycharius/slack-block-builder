const { ExternalSelect: Class, ExternalSelectDto: Dto } = require('../../src/elements/external-select');
const { props: classProps } = require('./mocks/external-select.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'ExternalSelect';
const group = 'Elements';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.placeholder,
  props.actionId,
  props.initialOption,
  props.minQueryLength,
  props.confirm,
];

helper({ config, props: properties });