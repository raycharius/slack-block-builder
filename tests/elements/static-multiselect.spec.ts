import { StaticMultiSelectBuilder as Class } from '../../src/elements/static-multi-select';
import { SlackElementDto as DtoClass } from '../../src/lib';
import { params } from './mocks/static-multiselect.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'StaticMultiSelectBuilder';
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
  methods.initialOptions,
  methods.confirm,
  methods.maxSelectedItems,
  methods.focusOnLoad,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
