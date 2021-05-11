import { WebClient } from '@slack/web-api'
import { Modal, Message, Section } from './src';

const client = new WebClient('asdf');

(async () => client.chat.postMessage({
  text: 'abc',
  channel: 'abc',
  blocks: Modal().blocks(Section(), Section()).getBlocks(),
  attachments: Message().getAttachments(),
}))();

(async () => client.views.open({
  trigger_id: 'abc',
  view: {
    type: 'modal',
    blocks: Modal()
      .blocks
      (Section(),
        Section())
      .getBlocks(),
  },
}))();
