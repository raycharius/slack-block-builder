import { getBuiltCollection } from '../helpers';

import type { BlockBuilder, Appendable } from '../types';
import type { AttachmentBuilder } from '../bits';
import type { SlackBlockDto, SlackDto } from '../lib';

export function BlockCollection(...blocks: Appendable<BlockBuilder>): SlackBlockDto[] | [] {
  return getBuiltCollection<BlockBuilder, SlackBlockDto>(...blocks);
}

export function AttachmentCollection(...attachments: Appendable<AttachmentBuilder>): SlackDto[] | [] {
  return getBuiltCollection<AttachmentBuilder, SlackDto>(...attachments);
}

const utilities = {
  BlockCollection,
  AttachmentCollection,
};

export { utilities as Utilities };
