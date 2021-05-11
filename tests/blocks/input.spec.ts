import { InputBuilder as Class } from '../../src/blocks/input';
import { BlockSlackDto as DtoClass } from '../../src/lib';
import { params } from './mocks/input.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'InputBuilder';
const category = 'Blocks';

const config = {
  Class,
  DtoClass,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.label,
  methods.element,
  methods.blockId,
  methods.hint,
  methods.optional,
  methods.dispatchAction,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
