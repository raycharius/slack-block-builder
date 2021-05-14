import { getBuiltCollection } from '../helpers';

import type { BlockBuilder, OneOrArray } from '../types';
import type { AttachmentBuilder } from '../bits/attachment';
import type { SlackBlockDto, SlackDto } from '../lib';

export function BlockCollection(
  block: OneOrArray<BlockBuilder>, ...blocks: Array<OneOrArray<BlockBuilder>>
): SlackBlockDto[] | [] {
  return getBuiltCollection<BlockBuilder, SlackBlockDto>(...[block, ...blocks]);
}

export function AttachmentCollection(
  attachment: OneOrArray<AttachmentBuilder>, ...attachments: Array<OneOrArray<AttachmentBuilder>>
): SlackDto[] | [] {
  return getBuiltCollection<AttachmentBuilder, SlackDto>(...[attachment, ...attachments]);
}

const utilities = {
  BlockCollection,
  AttachmentCollection,
};

export { utilities as Utilities };
