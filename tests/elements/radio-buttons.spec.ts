import { RadioButtonsBuilder as Class } from '../../src/elements/radio-buttons';
import { ElementSlackDto as DtoClass } from '../../src/lib';
import { params } from './mocks/radio-buttons.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'RadioButtonsBuilder';
const category = 'Elements';

const config = {
  Class,
  DtoClass,
  params,
  className,
  category,
  expectMarkdown: true,
};

const methodsConfig = [
  methods.actionId,
  methods.options,
  methods.initialOption,
  methods.confirm,

];

testCompositeBuilderClass({ config, methods: methodsConfig });
