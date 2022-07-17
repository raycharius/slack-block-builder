import {
  BlockCollection,
  AttachmentCollection,
  OptionCollection,
  OptionGroupCollection,
  buildBlock,
  buildBlocks,
} from '../../src/utilities';
import { Blocks } from '../../src/blocks';
import { Bits } from '../../src/bits';

describe('Testing Utility Functions:', () => {
  test('Calling `BlockCollection()` with an array of blocks returns an array of block-focused DTOs.', () => {
    const blocks = BlockCollection([
      Blocks.Section(),
      Blocks.Section(),
      Blocks.Section(),
    ]);

    expect(blocks).toEqual([
      Blocks.Section().build(),
      Blocks.Section().build(),
      Blocks.Section().build(),
    ]);
  });

  test('Calling `BlockCollection()` with multiple arrays of blocks returns an array of block-focused DTOs.', () => {
    const blocks = BlockCollection([
      Blocks.Section(),
      Blocks.Section(),
      Blocks.Section(),
    ],
    [
      Blocks.Section(),
      Blocks.Section(),
      Blocks.Section(),
    ]);

    expect(blocks).toEqual([
      Blocks.Section().build(),
      Blocks.Section().build(),
      Blocks.Section().build(),
      Blocks.Section().build(),
      Blocks.Section().build(),
      Blocks.Section().build(),
    ]);
  });

  test('Calling `BlockCollection()` with multiple blocks as args returns an array of block-focused DTOs.', () => {
    const blocks = BlockCollection(
      Blocks.Section(),
      Blocks.Section(),
      Blocks.Section(),
    );

    expect(blocks).toEqual([
      Blocks.Section().build(),
      Blocks.Section().build(),
      Blocks.Section().build(),
    ]);
  });

  test('Calling `BlockCollection()` with undefined values strips those from the resulting array.', () => {
    const blocks = BlockCollection(
      Blocks.Section(),
      Blocks.Section(),
      undefined,
      Blocks.Section(),
      [
        Blocks.Section(),
        undefined,
        Blocks.Section(),
      ],
    );

    expect(blocks).toEqual([
      Blocks.Section().build(),
      Blocks.Section().build(),
      Blocks.Section().build(),
      Blocks.Section().build(),
      Blocks.Section().build(),
    ]);
  });

  test('Calling `BlockCollection()` with only undefined values returns an empty array.', () => {
    const blocks = BlockCollection(
      undefined,
      undefined,
      undefined,
      undefined,
      [
        undefined,
        undefined,
        undefined,
      ],
    );

    expect(blocks).toEqual([]);
  });

  test('Calling `AttachmentCollection()` with an array of attachments returns an array of attachment-focused DTOs.', () => {
    const blocks = AttachmentCollection([
      Bits.Attachment(),
      Bits.Attachment(),
      Bits.Attachment(),
    ]);

    expect(blocks).toEqual([
      Bits.Attachment().build(),
      Bits.Attachment().build(),
      Bits.Attachment().build(),
    ]);
  });

  test('Calling `AttachmentCollection()` with multiple arrays of attachments returns an array of attachment-focused DTOs.', () => {
    const blocks = AttachmentCollection([
      Bits.Attachment(),
      Bits.Attachment(),
      Bits.Attachment(),
    ],
    [
      Bits.Attachment(),
      Bits.Attachment(),
      Bits.Attachment(),
    ]);

    expect(blocks).toEqual([
      Bits.Attachment().build(),
      Bits.Attachment().build(),
      Bits.Attachment().build(),
      Bits.Attachment().build(),
      Bits.Attachment().build(),
      Bits.Attachment().build(),
    ]);
  });

  test('Calling `AttachmentCollection()` with multiple attachments as args returns an array of attachment-focused DTOs.', () => {
    const blocks = AttachmentCollection(
      Bits.Attachment(),
      Bits.Attachment(),
      Bits.Attachment(),
    );

    expect(blocks).toEqual([
      Bits.Attachment().build(),
      Bits.Attachment().build(),
      Bits.Attachment().build(),
    ]);
  });

  test('Calling `AttachmentCollection()` with undefined values strips those from the resulting array.', () => {
    const blocks = AttachmentCollection(
      Bits.Attachment(),
      Bits.Attachment(),
      undefined,
      Bits.Attachment(),
      [
        Bits.Attachment(),
        undefined,
        Bits.Attachment(),
      ],
    );

    expect(blocks).toEqual([
      Bits.Attachment().build(),
      Bits.Attachment().build(),
      Bits.Attachment().build(),
      Bits.Attachment().build(),
      Bits.Attachment().build(),
    ]);
  });

  test('Calling `AttachmentCollection()` with only undefined values returns an empty array.', () => {
    const blocks = AttachmentCollection(
      undefined,
      undefined,
      undefined,
      undefined,
      [
        undefined,
        undefined,
        undefined,
      ],
    );

    expect(blocks).toEqual([]);
  });

  test('Calling `OptionCollection()` with an array of options returns an array of option-focused DTOs.', () => {
    const blocks = OptionCollection([
      Bits.Option(),
      Bits.Option(),
      Bits.Option(),
    ]);

    expect(blocks).toEqual([
      Bits.Option().build(),
      Bits.Option().build(),
      Bits.Option().build(),
    ]);
  });

  test('Calling `OptionCollection()` with multiple arrays of options returns an array of option-focused DTOs.', () => {
    const blocks = OptionCollection([
      Bits.Option(),
      Bits.Option(),
      Bits.Option(),
    ],
    [
      Bits.Option(),
      Bits.Option(),
      Bits.Option(),
    ]);

    expect(blocks).toEqual([
      Bits.Option().build(),
      Bits.Option().build(),
      Bits.Option().build(),
      Bits.Option().build(),
      Bits.Option().build(),
      Bits.Option().build(),
    ]);
  });

  test('Calling `OptionCollection()` with multiple options as args returns an array of option-focused DTOs.', () => {
    const blocks = OptionCollection(
      Bits.Option(),
      Bits.Option(),
      Bits.Option(),
    );

    expect(blocks).toEqual([
      Bits.Option().build(),
      Bits.Option().build(),
      Bits.Option().build(),
    ]);
  });

  test('Calling `OptionCollection()` with undefined values strips those from the resulting array.', () => {
    const blocks = OptionCollection(
      Bits.Option(),
      Bits.Option(),
      undefined,
      Bits.Option(),
      [
        Bits.Option(),
        undefined,
        Bits.Option(),
      ],
    );

    expect(blocks).toEqual([
      Bits.Option().build(),
      Bits.Option().build(),
      Bits.Option().build(),
      Bits.Option().build(),
      Bits.Option().build(),
    ]);
  });

  test('Calling `OptionCollection()` with only undefined values returns an empty array.', () => {
    const blocks = OptionCollection(
      undefined,
      undefined,
      undefined,
      undefined,
      [
        undefined,
        undefined,
        undefined,
      ],
    );

    expect(blocks).toEqual([]);
  });

  test('Calling `OptionGroupCollection()` with an array of option groups returns an array of option group-focused DTOs.', () => {
    const blocks = OptionGroupCollection([
      Bits.OptionGroup(),
      Bits.OptionGroup(),
      Bits.OptionGroup(),
    ]);

    expect(blocks).toEqual([
      Bits.OptionGroup().build(),
      Bits.OptionGroup().build(),
      Bits.OptionGroup().build(),
    ]);
  });

  test('Calling `OptionGroupCollection()` with multiple arrays of option groups returns an array of option group-focused DTOs.', () => {
    const blocks = OptionGroupCollection([
      Bits.OptionGroup(),
      Bits.OptionGroup(),
      Bits.OptionGroup(),
    ],
    [
      Bits.OptionGroup(),
      Bits.OptionGroup(),
      Bits.OptionGroup(),
    ]);

    expect(blocks).toEqual([
      Bits.OptionGroup().build(),
      Bits.OptionGroup().build(),
      Bits.OptionGroup().build(),
      Bits.OptionGroup().build(),
      Bits.OptionGroup().build(),
      Bits.OptionGroup().build(),
    ]);
  });

  test('Calling `OptionGroupCollection()` with multiple option groups as args returns an array of option group-focused DTOs.', () => {
    const blocks = OptionGroupCollection(
      Bits.OptionGroup(),
      Bits.OptionGroup(),
      Bits.OptionGroup(),
    );

    expect(blocks).toEqual([
      Bits.OptionGroup().build(),
      Bits.OptionGroup().build(),
      Bits.OptionGroup().build(),
    ]);
  });

  test('Calling `OptionGroupCollection()` with undefined values strips those from the resulting array.', () => {
    const blocks = OptionGroupCollection(
      Bits.OptionGroup(),
      Bits.OptionGroup(),
      undefined,
      Bits.OptionGroup(),
      [
        Bits.OptionGroup(),
        undefined,
        Bits.OptionGroup(),
      ],
    );

    expect(blocks).toEqual([
      Bits.OptionGroup().build(),
      Bits.OptionGroup().build(),
      Bits.OptionGroup().build(),
      Bits.OptionGroup().build(),
      Bits.OptionGroup().build(),
    ]);
  });

  test('Calling `OptionGroupCollection()` with only undefined values returns an empty array.', () => {
    const blocks = OptionGroupCollection(
      undefined,
      undefined,
      undefined,
      undefined,
      [
        undefined,
        undefined,
        undefined,
      ],
    );

    expect(blocks).toEqual([]);
  });

  test('Calling `buildBlock()` with a block returns the built block.', () => {
    const block = Blocks.Section();
    const built = buildBlock(block);

    expect(built).toEqual(block.build());
  });

  test('Calling `buildBlocks()` with blocks returns the built blocks.', () => {
    const blocks = buildBlocks([
      Blocks.Section(),
      Blocks.Section(),
      Blocks.Section(),
    ]);

    expect(blocks).toEqual([
      Blocks.Section().build(),
      Blocks.Section().build(),
      Blocks.Section().build(),
    ]);
  });
});
