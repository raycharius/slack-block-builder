const { ConfirmationDialog: Class, ConfirmationDialogDto: Dto } = require('../../src/bits/confirmation-dialog');
const { props: classProps } = require('./mocks/confirmation-dialog.mock')
const props = require('../props');
const helper = require('../helper');

const className = 'ConfirmationDialog';
const group = 'Bits';

const config = { className, Class, Dto, classProps, group, expectMarkdown: true };

const properties = [
  props.title,
  props.text,
  props.confirmDialog,
  props.deny,
  props.danger,
  props.primary
];

helper({ config, props: properties });