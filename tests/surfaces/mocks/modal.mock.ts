import { ModalBuilder } from '../../../src/surfaces/modal';

export const params = {
  title: 'title',
  close: 'close',
  submit: 'submit',
  privateMetaData: 'privateMetaData',
  callbackId: 'callbackId',
  externalId: 'externalId',
};

export const mock = new ModalBuilder(params);
