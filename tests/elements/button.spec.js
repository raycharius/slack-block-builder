const { Button: Class, ButtonDto: Dto } = require('../../src/elements/button');
const { props: classProps } = require('./mocks/button.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'Button';
const group = 'Elements';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.actionId,
  props.text,
  props.url,
  props.value,
  props.danger,
  props.primary,
  props.confirm,
];

helper({ config, props: properties });