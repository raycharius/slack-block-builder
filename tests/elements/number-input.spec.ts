import { NumberInputBuilder as Class } from '../../src/elements/number-input';
import { SlackElementDto as DtoClass } from '../../src/internal';
import { params } from './mocks/text-input.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'NumberInputBuilder';
const category = 'Elements';

const config = {
  Class,
  DtoClass,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.isDecimalAllowed,
  methods.placeholder,
  methods.actionId,
  methods.initialValueNumber,
  methods.minValue,
  methods.maxValue,
  methods.onEnterPressed,
  methods.onCharacterEntered,
  methods.focusOnLoad,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
