const { UserSelect: Class, UserSelectDto: Dto } = require('../../src/elements/user-select');
const { props: classProps } = require('./mocks/user-select.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'UserSelect';
const group = 'Elements';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.placeholder,
  props.actionId,
  props.initialUser,
  props.confirm,
];

helper({ config, props: properties });