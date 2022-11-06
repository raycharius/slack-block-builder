import { EmailInputBuilder } from '../../../src/elements/email-input';

export const params = {
  placeholder: 'placeholder',
  actionId: 'actionId',
  initialValue: 'serhiy@grigoruk.com',
};

export const mock = new EmailInputBuilder(params);
