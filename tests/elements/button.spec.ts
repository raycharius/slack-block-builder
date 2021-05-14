import { ButtonBuilder as Class } from '../../src/elements/button';
import { SlackElementDto as DtoClass } from '../../src/lib';
import { params } from './mocks/button.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'ButtonBuilder';
const category = 'Elements';

const config = {
  Class,
  DtoClass,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.actionId,
  methods.text,
  methods.url,
  methods.value,
  methods.danger,
  methods.primary,
  methods.confirm,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
