import { TimePickerBuilder as Class } from '../../src/elements/timepicker';
import { params } from './mocks/time-picker.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'TimePicker';
const category = 'Elements';

const config = {
  Class,
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
