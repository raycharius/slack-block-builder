import { StaticSelectBuilder as Class } from '../../src/elements/static-select';
import { ElementSlackDto as DtoClass } from '../../src/lib';
import { params } from './mocks/static-select.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'StaticSelectBuilder';
const category = 'Elements';

const config = {
  Class,
  DtoClass,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.placeholder,
  methods.actionId,
  methods.options,
  methods.optionGroups,
  methods.initialOption,
  methods.confirm,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
