import { OptionBuilder as Class } from '../../src/bits/option';
import { SlackDto as DtoClass } from '../../src/internal';
import { params } from './mocks/option.mock';
import { testCompositeBuilderClass } from '../test-composite-builder-class';
import * as methods from '../methods';

const className = 'OptionBuilder';
const category = 'Bits';

const config = {
  Class,
  DtoClass,
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
