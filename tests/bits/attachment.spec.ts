import { AttachmentBuilder as Class } from '../../src/bits/attachment';
import { SlackDto as DtoClass } from '../../src/lib';
import { params } from './mocks/attachment.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'AttachmentBuilder';
const category = 'Bits';

const config = {
  Class,
  DtoClass,
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
