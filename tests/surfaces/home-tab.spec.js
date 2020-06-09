const { HomeTab: Class, HomeTabDto: Dto } = require('../../src/surfaces/home-tab');
const { props: classProps } = require('./mocks/home-tab.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'HomeTab';
const group = 'Surfaces';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.blocks,
  props.privateMetaData,
  props.callbackId,
  props.externalId,
];

helper({ config, props: properties });