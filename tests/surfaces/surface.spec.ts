import {
  Modal,
  Message,
  HomeTab,
  Blocks,
  Bits,
} from '../../src';

describe('Surfaces', () => {
  test('Calling \'buildToObject()\' builds the view and returns an object', () => {
    const modal = Modal()
      .title('Some Modal')
      .blocks(Blocks.Divider());
    const result = modal.buildToObject();

    expect(result).toEqual(modal.build());
  });

  test('Calling \'buildJSON()\' builds the view and returns a string', () => {
    const modal = Modal()
      .title('Some Modal')
      .blocks(Blocks.Divider());
    const result = modal.buildToJSON();

    expect(result).toEqual(JSON.stringify(modal.build()));
  });

  test('Calling \'printPreviewUrl()\' for Modal and HomeTabs logs the URL to the console', () => {
    const modal = Modal()
      .title('Some Modal')
      .blocks(Blocks.Divider());

    jest.spyOn(console, 'log');

    modal.printPreviewUrl();

    // eslint-disable-next-line no-console
    expect(console.log).toHaveBeenCalled();
  });

  test('Calling \'printPreviewUrl()\' for Message logs the URL to the console', () => {
    const message = Modal()
      .blocks(Blocks.Divider());

    jest.spyOn(console, 'log');

    message.printPreviewUrl();

    // eslint-disable-next-line no-console
    expect(console.log).toHaveBeenCalled();
  });

  test('Calling \'getBlocks()\' for Message returns an array of Blocks', () => {
    const message = Modal()
      .blocks(Blocks.Divider());
    const blocks = message.getBlocks();

    expect(blocks).toEqual(expect.arrayContaining(message.build().blocks));
  });

  test('Calling \'getAttachments()\' for Message returns an array of Attachments', () => {
    const message = Message()
      .attachments([
        Bits.Attachment({ color: 'ffffff' })
          .blocks(
            Blocks.Section({ text: 'Section #1' }),
            Blocks.Section({ text: 'Section #2' }),
          ),
        Bits.Attachment({ color: '000000' })
          .blocks(
            Blocks.Section({ text: 'Section #3' }),
            Blocks.Section({ text: 'Section #4' }),
          ),
      ]);
    const attachments = message.getAttachments();

    expect(attachments).toEqual(expect.arrayContaining(message.build().attachments));
  });

  test('Calling \'getBlocks()\' for Modal returns an array of Blocks', () => {
    const modal = Modal()
      .blocks(Blocks.Divider());
    const blocks = modal.getBlocks();

    expect(blocks).toEqual(expect.arrayContaining(modal.build().blocks));
  });

  test('Calling \'getBlocks()\' for HomeTab returns an array of Blocks', () => {
    const homeTab = HomeTab()
      .blocks(Blocks.Divider());
    const blocks = homeTab.getBlocks();

    expect(blocks).toEqual(expect.arrayContaining(homeTab.build().blocks));
  });
});
