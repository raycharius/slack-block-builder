import { ModalBuilder as Class } from '../../src/surfaces/modal';
import { params } from './mocks/modal.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'Modal';
const category = 'Surfaces';

const config = {
  Class,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.title,
  methods.blocks,
  methods.close,
  methods.submit,
  methods.privateMetaData,
  methods.callbackId,
  methods.clearOnClose,
  methods.notifyOnClose,
  methods.externalId,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
