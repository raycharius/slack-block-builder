import { ConfirmationDialogBuilder } from '../../../src/bits/confirmation-dialog';

export const params = {
  title: 'title',
  text: 'title',
  confirm: 'confirm',
  deny: 'deny',
};

export const mock = new ConfirmationDialogBuilder(params);
