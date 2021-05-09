import { MessageBuilder } from '../../../src/surfaces/message';

export const params = {
  channel: 'channel',
  text: 'text',
  ts: '1593125546.000100',
  threadTs: '1593125546.000100',
  postAt: 1593125546,
};

export const mock = new MessageBuilder(params);
