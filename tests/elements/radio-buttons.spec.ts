import { RadioButtonsBuilder as Class } from '../../src/elements/radio-buttons';
import { params } from './mocks/radio-buttons.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'RadioButtons';
const category = 'Elements';

const config = {
  Class, params, className, category, expectMarkdown: true,
};

const methodsConfig = [
  methods.actionId,
  methods.options,
  methods.initialOption,
  methods.confirm,

];

testCompositeBuilderClass({ config, methods: methodsConfig });
