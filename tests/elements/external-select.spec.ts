import { ExternalSelectElement as Class } from '../../src/elements/external-select';
import { params } from './mocks/external-select.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'ExternalSelect';
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
  methods.initialOption,
  methods.minQueryLength,
  methods.confirm,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
