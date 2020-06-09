const { OverflowMenu: Class, OverflowMenuDto: Dto } = require('../../src/elements/overflow-menu');
const { props: classProps } = require('./mocks/overflow-menu.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'OverflowMenu';
const group = 'Elements';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.actionId,
  props.options,
  props.confirm,
];

helper({ config, props: properties });