import { OptionBit as Class } from '../../src/bits/option';
import { params } from './mocks/option.mock';
import { testCompositeBuilderClass } from '../test-composite-builder-class';
import * as methods from '../methods';

const className = 'Option';
const category = 'Bits';

const config = {
  Class,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.text,
  methods.value,
  methods.description,
  methods.url,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
