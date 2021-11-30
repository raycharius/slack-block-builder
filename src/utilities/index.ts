/* eslint-disable max-len */

import { SlackBlockDto, SlackDto } from '../internal/dto';
import { Builder } from '../internal/lib';

import type { BlockBuilder, Appendable } from '../internal/types';
import type { AttachmentBuilder } from '../bits';

type Collection<T> = T[];

const getBuiltCollection = <T extends Builder, Dto extends SlackDto>(
  ...builders: Appendable<T>
): Collection<Dto> => Builder.pruneUndefinedFromArray(builders.flat())
    .map((builder) => builder && builder.build());

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

// Strange export. I know. For IDE highlighting purposes.

export { utilities as Utilities };
