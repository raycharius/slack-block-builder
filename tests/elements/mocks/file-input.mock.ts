import { FileInputBuilder } from '../../../src/elements/file-input';

export const params = {
  actionId: 'actionId',
  filetypes: 'filetypes',
  maxFiles: 'maxFiles',
};

export const mock = new FileInputBuilder(params);
