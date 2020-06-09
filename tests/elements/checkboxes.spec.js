const { Checkboxes: Class, CheckboxesDto: Dto } = require('../../src/elements/checkboxes');
const { props: classProps } = require('./mocks/checkboxs.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'Checkboxes';
const group = 'Elements';

const config = { className, Class, Dto, classProps, group, expectMarkdown: true };

const properties = [
  props.actionId,
  props.options,
  props.initialOptions,
  props.confirm,
];

helper({ config, props: properties });