import { OptionGroupBuilder as Class } from '../../src/bits/option-group';
import { SlackDto as DtoClass } from '../../src/internal';
import { params } from './mocks/option-group.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'OptionGroupBuilder';
const category = 'Bits';

const config = {
  Class,
  DtoClass,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.label,
  methods.options,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
