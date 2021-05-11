import { ConfirmationDialogBuilder as Class } from '../../src/bits/confirmation-dialog';
import { SlackDto as DtoClass } from '../../src/lib';
import { params } from './mocks/confirmation-dialog.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'ConfirmationDialog';
const category = 'Bits';

const config = {
  Class,
  DtoClass,
  params,
  className,
  category,
  expectMarkdown: true,
};

const methodsConfig = [
  methods.title,
  methods.text,
  methods.confirmDialog,
  methods.deny,
  methods.danger,
  methods.primary,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
