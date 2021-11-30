import { FileBuilder as Class } from '../../src/blocks/file';
import { SlackBlockDto as DtoClass } from '../../src/internal';
import { params } from './mocks/file.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'FileBuilder';
const category = 'Blocks';

const config = {
  Class,
  DtoClass,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.externalId,
  methods.blockId,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
