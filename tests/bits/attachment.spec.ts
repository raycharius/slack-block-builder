import { AttachmentBit as Class } from '../../src/bits/attachment';
import { params } from './mocks/attachment.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'Attachment';
const category = 'Bits';

const config = {
  Class,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.color,
  methods.fallback,
  methods.blocks,
];

testCompositeBuilderClass({ config, methods: methodsConfig });