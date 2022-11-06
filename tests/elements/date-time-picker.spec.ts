import { DateTimePickerBuilder as Class } from '../../src/elements/date-time-picker';
import { SlackElementDto as DtoClass } from '../../src/internal';
import { params } from './mocks/date-time-picker.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'DateTimePickerBuilder';
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
  methods.initialDateTime,
  methods.confirm,
  methods.focusOnLoad,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
