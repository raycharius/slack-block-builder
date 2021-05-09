import { StaticSelectBuilder as Class } from '../../src/elements/static-select';
import { params } from './mocks/static-select.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'StaticSelect';
const category = 'Elements';

const config = {
  Class,
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
