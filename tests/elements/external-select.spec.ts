import { ExternalSelectBuilder as Class } from '../../src/elements/external-select';
import { SlackElementDto as DtoClass } from '../../src/lib';
import { params } from './mocks/external-select.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'ExternalSelectBuilder';
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
  methods.initialOption,
  methods.minQueryLength,
  methods.confirm,
  methods.focusOnLoad,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
