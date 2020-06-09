const { Section: Class, SectionDto: Dto } = require('../../src/blocks/section');
const { props: classProps } = require('./mocks/section.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'Section';
const group = 'Blocks';

const config = { className, Class, Dto, classProps, group, expectMarkdown: true };

const properties = [
  props.text,
  props.blockId,
  props.fields,
  props.accessory,
];

helper({ config, props: properties });