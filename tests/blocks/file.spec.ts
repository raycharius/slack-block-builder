import { FileBlock as Class } from '../../src/blocks/file';
import { params } from './mocks/file.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'File';
const category = 'Blocks';

const config = {
  Class,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.externalId,
  methods.blockId,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
