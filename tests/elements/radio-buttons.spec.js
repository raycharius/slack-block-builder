const { RadioButtons: Class, RadioButtonsDto: Dto } = require('../../src/elements/radio-buttons');
const { props: classProps } = require('./mocks/radio-buttons.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'RadioButtons';
const group = 'Elements';

const config = { className, Class, Dto, classProps, group, expectMarkdown: true };

const properties = [
  props.actionId,
  props.options,
  props.initialOption,
  props.confirm,

];

helper({ config, props: properties });