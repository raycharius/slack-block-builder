import { getBuiltCollection } from '../helpers';

import type { BlockBuilder, OneOrArray } from '../types';
import type { AttachmentBuilder } from '../bits/attachment';
import type { BlockSlackDto, SlackDto } from '../lib';

export function BlockCollection(
  block: OneOrArray<BlockBuilder>, ...blocks: Array<OneOrArray<BlockBuilder>>
): BlockSlackDto[] | [] {
  return getBuiltCollection<BlockBuilder, BlockSlackDto>(...[block, ...blocks]);
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
