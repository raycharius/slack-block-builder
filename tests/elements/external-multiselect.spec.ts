import { ExternalMultiSelectBuilder as Class } from '../../src/elements/external-multi-select';
import { ElementSlackDto as DtoClass } from '../../src/lib';
import { params } from './mocks/external-multiselect.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'ExternalMultiSelect';
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
  methods.minQueryLength,
  methods.initialOptions,
  methods.confirm,
  methods.maxSelectedItems,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
