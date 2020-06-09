const { UserMultiSelect: Class, UserMultiSelectDto: Dto } = require('../../src/elements/user-multiselect');
const { props: classProps } = require('./mocks/user-multiselect.mock');
const props = require('../props');
const helper = require('../helper');

const className = 'UserMultiSelect';
const group = 'Elements';

const config = { className, Class, Dto, classProps, group };

const properties = [
  props.placeholder,
  props.actionId,
  props.initialUsers,
  props.confirm,
  props.maxSelectedItems,
];

helper({ config, props: properties });