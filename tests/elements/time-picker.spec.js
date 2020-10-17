const { TimePicker: Class, TimePickerDto: Dto } = require('../../src/elements/time-picker');
const { props: classProps } = require('./mocks/time-picker.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'TimePicker';
const group = 'Elements';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.actionId,
  props.placeholder,
  props.initialTime,
  props.confirm,
];

helper({ config, props: properties });