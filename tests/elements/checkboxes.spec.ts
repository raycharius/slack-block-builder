import { CheckboxesBuilder as Class } from '../../src/elements/checkboxes';
import { SlackElementDto as DtoClass } from '../../src/internal';
import { params } from './mocks/checkboxs.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'CheckboxesBuilder';
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
  methods.initialOptions,
  methods.focusOnLoad,
  methods.confirm,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
