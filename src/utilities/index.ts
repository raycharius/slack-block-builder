/* eslint-disable max-len */

import { getBuiltCollection } from '../helpers';

import type { BlockBuilder, Appendable } from '../types';
import type { AttachmentBuilder } from '../bits';
import type { SlackBlockDto, SlackDto } from '../lib';

/**
 * @description Creates and returns an array of built blocks. Behaves in the same way as all appending methods, such as Surface.blocks().
 */

export function BlockCollection(...blocks: Appendable<BlockBuilder>): Readonly<SlackBlockDto>[] {
  return getBuiltCollection<BlockBuilder, Readonly<SlackBlockDto>>(...blocks);
}

/**
 * @description Creates and returns an array of built attachments. Behaves in the same way as all appending methods, such as Message.attachments().
 */

export function AttachmentCollection(...attachments: Appendable<AttachmentBuilder>): Readonly<SlackDto>[] {
  return getBuiltCollection<AttachmentBuilder, Readonly<SlackDto>>(...attachments);
}

const utilities = {
  BlockCollection,
  AttachmentCollection,
};

export { utilities as Utilities };
