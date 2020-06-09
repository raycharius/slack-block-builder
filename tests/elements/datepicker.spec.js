const { DatePicker: Class, DatePickerDto: Dto } = require('../../src/elements/datepicker');
const { props: classProps } = require('./mocks/datepicker.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'DatePicker';
const group = 'Elements';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.actionId,
  props.placeholder,
  props.initialDate,
  props.confirm,
];

helper({ config, props: properties });