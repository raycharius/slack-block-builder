import { getBuiltCollection } from '../helpers';

import type { BlockBuilder, Appendable } from '../types';
import type { AttachmentBuilder } from '../bits';
import type { SlackBlockDto, SlackDto } from '../lib';

export function BlockCollection(
  ...blocks: Appendable<BlockBuilder>
): Readonly<SlackBlockDto>[] {
  return getBuiltCollection<BlockBuilder, Readonly<SlackBlockDto>>(...blocks);
}

export function AttachmentCollection(
  ...attachments: Appendable<AttachmentBuilder>
): Readonly<SlackDto>[] {
  return getBuiltCollection<AttachmentBuilder, Readonly<SlackDto>>(...attachments);
}

const utilities = {
  BlockCollection,
  AttachmentCollection,
};

export { utilities as Utilities };
