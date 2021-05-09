import { HomeTabBuilder } from '../../../src/surfaces/home-tab';

export const params = {
  privateMetaData: 'privateMetaData',
  callbackId: 'callbackId',
  externalId: 'externalId',
};

export const mock = new HomeTabBuilder(params);
