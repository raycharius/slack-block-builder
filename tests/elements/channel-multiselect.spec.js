const { ChannelMultiSelect: Class, ChannelMultiSelectDto: Dto } = require('../../src/elements/channel-multiselect');
const { props: classProps } = require('./mocks/channel-multiselect.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'ChannelMultiSelect';
const group = 'Elements';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.placeholder,
  props.actionId,
  props.initialChannels,
  props.confirm,
  props.maxSelectedItems,
];

helper({ config, props: properties });