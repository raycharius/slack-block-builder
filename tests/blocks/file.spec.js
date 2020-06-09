const { File: Class, FileDto: Dto } = require('../../src/blocks/file');
const { props: classProps } = require('./mocks/file.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'File';
const group = 'Blocks';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.externalId,
  props.blockId,
];

helper({ config, props: properties });