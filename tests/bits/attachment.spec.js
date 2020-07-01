const { Attachment: Class, AttachmentDto: Dto } = require('../../src/bits/attachment');
const { props: classProps } = require('./mocks/attachment.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'Attachment';
const group = 'Bits';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.color,
  props.blocks,
];

helper({ config, props: properties });