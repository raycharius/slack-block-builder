import { ExternalMultiSelectBuilder as Class } from '../../src/elements/external-multi-select';
import { SlackElementDto as DtoClass } from '../../src/internal';
import { params } from './mocks/external-multiselect.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'ExternalMultiSelectBuilder';
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
  methods.focusOnLoad,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
