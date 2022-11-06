import { DatePickerBuilder as Class } from '../../src/elements/date-picker';
import { SlackElementDto as DtoClass } from '../../src/internal';
import { params } from './mocks/date-picker.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'DatePickerBuilder';
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
  methods.placeholder,
  methods.initialDate,
  methods.confirm,
  methods.focusOnLoad,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
