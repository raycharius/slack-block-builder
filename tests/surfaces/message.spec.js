const { Message: Class, MessageDto: Dto } = require('../../src/surfaces/message');
const { props: classProps } = require('./mocks/message.mock')
const props = require('../props');
const helper = require('../helper');

const className = 'Message';
const group = 'Surfaces';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.channel,
  props.textMessage,
  props.blocks,
  props.asUser,
  props.threadTs,
  props.replaceOriginal,
  props.deleteOriginal,
  props.ephemeral,
  props.inChannel,
  props.postAt,
  props.ts,
  props.attachments,
];

helper({ config, props: properties });