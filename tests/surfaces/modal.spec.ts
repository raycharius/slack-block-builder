import { ModalBuilder as Class } from '../../src/surfaces/modal';
import { SlackViewDto as DtoClass } from '../../src/lib';
import { params } from './mocks/modal.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'ModalBuilder';
const category = 'Surfaces';

const config = {
  Class,
  DtoClass,
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
