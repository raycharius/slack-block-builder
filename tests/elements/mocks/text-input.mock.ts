import { TextInputBuilder } from '../../../src/elements/text-input';

export const params = {
  placeholder: 'placeholder',
  actionId: 'actionId',
  initialValue: 'initialValue',
  minLength: 100,
  maxLength: 300,
};

export const mock = new TextInputBuilder(params);
