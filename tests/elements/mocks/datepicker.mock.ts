import { DatePickerBuilder } from '../../../src/elements/datepicker';

export const params = {
  placeholder: 'placeholder',
  actionId: 'actionId',
  initialDate: new Date(),
};

export const mock = new DatePickerBuilder(params);
