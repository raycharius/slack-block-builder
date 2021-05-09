import { ContextBuilder as Class } from '../../src/blocks/context';
import { params } from './mocks/context.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'Context';
const category = 'Blocks';

const config = {
  Class,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.elements,
  methods.blockId,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
