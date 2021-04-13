import { ButtonElement } from '../../../src/elements/button';

export const params = {
  text: 'text',
  actionId: 'actionId',
  url: 'url',
  value: 'value',
};

export const mock = new ButtonElement(params).danger();
