import { DatePickerBuilder as Class } from '../../src/elements/datepicker';
import { ElementSlackDto as DtoClass } from '../../src/lib';
import { params } from './mocks/datepicker.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'DatePicker';
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
];

testCompositeBuilderClass({ config, methods: methodsConfig });
