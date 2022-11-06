import { DatePickerBuilder } from '../../../src/elements/date-picker';

export const params = {
  placeholder: 'placeholder',
  actionId: 'actionId',
  initialDate: new Date(),
};

export const mock = new DatePickerBuilder(params);
