import { CheckboxesElement as Class } from '../../src/elements/checkboxes';
import { params } from './mocks/checkboxs.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'Checkboxes';
const category = 'Elements';

const config = {
  Class, params, className, category, expectMarkdown: true,
};

const methodsConfig = [
  methods.actionId,
  methods.options,
  methods.initialOptions,
  methods.confirm,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
