/* eslint-disable max-len */

import { SlackBlockDto, SlackDto } from '../internal/dto';
import { Builder } from '../internal/lib';

import type { BlockBuilder, Appendable } from '../internal/types';
import type { AttachmentBuilder, OptionBuilder, OptionGroupBuilder } from '../bits';

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

export function OptionCollection(...options: Appendable<OptionBuilder>): Readonly<SlackDto>[] {
  return getBuiltCollection<OptionBuilder, Readonly<SlackDto>>(...options);
}

export function OptionGroupCollection(...optionGroups: Appendable<OptionGroupBuilder>): Readonly<SlackDto>[] {
  return getBuiltCollection<OptionGroupBuilder, Readonly<SlackDto>>(...optionGroups);
}

/**
 * @description Returns the block passed into the function as a built block, an object that conforms to the Slack API.
 */

export function buildBlock(block: BlockBuilder): Readonly<SlackBlockDto> {
  return block.build();
}

/**
 * @description Creates and returns an array of built blocks. Behaves in the same way as all appending methods, such as Surface.blocks().
 */

export function buildBlocks(...blocks: Appendable<BlockBuilder>): Readonly<SlackBlockDto>[] {
  return getBuiltCollection<BlockBuilder, Readonly<SlackBlockDto>>(...blocks);
}

const utilities = {
  AttachmentCollection,
  BlockCollection,
  OptionCollection,
  OptionGroupCollection,
  buildBlock,
  buildBlocks,
};

// Strange export. I know. For IDE highlighting purposes.

export { utilities as Utilities };
