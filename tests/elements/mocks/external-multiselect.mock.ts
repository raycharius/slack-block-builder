import { ExternalMultiSelectBuilder } from '../../../src/elements/external-multi-select';

export const params = {
  placeholder: 'placeholder',
  actionId: 'actionId',
  minQueryLength: 3,
  maxSelectedItems: 50,
};

export const mock = new ExternalMultiSelectBuilder(params);
