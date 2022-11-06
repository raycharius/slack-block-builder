import { NumberInputBuilder } from '../../../src/elements/number-input';

export const params = {
  placeholder: 'placeholder',
  actionId: 'actionId',
  initialValue: 30,
  isDecimalAllowed: true,
  minValue: 10,
  maxValue: 100,
};

export const mock = new NumberInputBuilder(params);
