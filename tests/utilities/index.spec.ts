import { BlockCollection, AttachmentCollection } from '../../src/utilities';
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
});
