import { InputBlock as Class } from '../../src/blocks/input';
import { params } from './mocks/input.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'Input';
const category = 'Blocks';

const config = {
  Class,
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
