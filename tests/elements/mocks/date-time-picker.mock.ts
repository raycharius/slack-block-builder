import { DateTimePickerBuilder } from '../../../src/elements/date-time-picker';

export const params = {
  actionId: 'actionId',
  initialDateTime: new Date(),
};

export const mock = new DateTimePickerBuilder(params);
