import { TimePickerBuilder as Class } from '../../src/elements/timepicker';
import { ElementSlackDto as DtoClass } from '../../src/lib';
import { params } from './mocks/time-picker.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'TimePickerBuilder';
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
  methods.initialTime,
  methods.confirm,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
