import { ButtonBuilder } from '../../../src/elements/button';

export const params = {
  text: 'text',
  actionId: 'actionId',
  url: 'url',
  value: 'value',
};

export const mock = new ButtonBuilder(params).danger();
