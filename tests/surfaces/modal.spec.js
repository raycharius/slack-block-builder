const { Modal: Class, ModalDto: Dto } = require('../../src/surfaces/modal');
const { props: classProps } = require('./mocks/modal.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'Modal';
const group = 'Surfaces';

const config = { className, Class, Dto, classProps, group };

const properties = [
props.title,
  props.blocks,
  props.close,
  props.submit,
  props.privateMetaData,
  props.callbackId,
  props.clearOnClose,
  props.notifyOnClose,
  props.externalId,
];

helper({ config, props: properties });