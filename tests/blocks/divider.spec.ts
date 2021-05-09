import { DividerBuilder as Class } from '../../src/blocks/divider';
import { params } from './mocks/divider.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'Divider';
const category = 'Blocks';

const config = {
  Class,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.blockId,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
