const { ChannelSelect: Class, ChannelSelectDto: Dto } = require('../../src/elements/channel-select');
const { props: classProps } = require('./mocks/channel-select.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'ChannelSelect';
const group = 'Elements';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.placeholder,
  props.actionId,
  props.initialChannel,
  props.confirm,
  props.responseUrlEnabled,
];

helper({ config, props: properties });