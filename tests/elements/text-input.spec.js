const { TextInput: Class, TextInputDto: Dto } = require('../../src/elements/text-input');
const { props: classProps } = require('./mocks/text-input.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'TextInput';
const group = 'Elements';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.placeholder,
  props.actionId,
  props.initialValue,
  props.multiline,
  props.minLength,
  props.maxLength,
  props.onEnterPressed,
  props.onCharacterEntered,
];

helper({ config, props: properties });