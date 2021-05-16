import { UserMultiSelectBuilder } from '../../../src/elements/user-multi-select';

export const params = {
  placeholder: 'placeholder',
  actionId: 'actionId',
  maxSelectedItems: 50,
};

export const mock = new UserMultiSelectBuilder(params);
