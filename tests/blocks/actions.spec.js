const { Actions: Class, ActionsDto: Dto } = require('../../src/blocks/actions');
const { props: classProps } = require('./mocks/actions.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'Actions';
const group = 'Blocks';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.elements,
  props.blockId,
];

helper({ config, props: properties });