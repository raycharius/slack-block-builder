import { DividerBuilder as Class } from '../../src/blocks/divider';
import { SlackBlockDto as DtoClass } from '../../src/internal';
import { params } from './mocks/divider.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'DividerBuilder';
const category = 'Blocks';

const config = {
  Class,
  DtoClass,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.blockId,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
