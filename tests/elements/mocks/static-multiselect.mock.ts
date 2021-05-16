import { StaticMultiSelectBuilder } from '../../../src/elements/static-multi-select';

export const params = {
  placeholder: 'placeholder',
  actionId: 'actionId',
  maxSelectedItems: 50,
};

export const mock = new StaticMultiSelectBuilder(params);
