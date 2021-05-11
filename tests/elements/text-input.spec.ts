import { TextInputBuilder as Class } from '../../src/elements/text-input';
import { ElementSlackDto as DtoClass } from '../../src/lib';
import { params } from './mocks/text-input.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'TextInput';
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
  methods.initialValue,
  methods.multiline,
  methods.minLength,
  methods.maxLength,
  methods.onEnterPressed,
  methods.onCharacterEntered,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
