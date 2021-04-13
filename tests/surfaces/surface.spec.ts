import {
  Modal, Message, HomeTab, Blocks, Bits,
} from '../../src';

describe('Surfaces', () => {
  test('Calling \'buildObject()\' builds the view and returns an object', () => {
    const modal = Modal()
      .title('Some Modal')
      .blocks(Blocks.Divider());
    const result = modal.buildToObject();

    expect(modal.isBuilt).toBeTruthy();
    expect(result).toEqual(modal.result);
  });

  test('Calling \'buildJSON()\' builds the view and returns a string', () => {
    const modal = Modal()
      .title('Some Modal')
      .blocks(Blocks.Divider());
    const result = modal.buildToJSON();

    expect(modal.isBuilt).toBeTruthy();
    expect(result).toEqual(JSON.stringify(modal.result));
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
    const message = Message()
      .blocks(Blocks.Divider());

    jest.spyOn(console, 'log');

    message.printPreviewUrl();

    // eslint-disable-next-line no-console
    expect(console.log).toHaveBeenCalled();
  });

  test('Calling \'getBlocks()\' for Message returns an array of Blocks', () => {
    const message = Message()
      .blocks(Blocks.Divider());
    const blocks = message.getBlocks();

    expect(message.isBuilt).toBeTruthy();
    expect(blocks).toEqual(expect.arrayContaining(message.result.blocks));
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

    expect(message.isBuilt).toBeTruthy();
    expect(attachments).toEqual(expect.arrayContaining(message.result.attachments));
  });

  test('Calling \'getBlocks()\' for Modal returns an array of Blocks', () => {
    const modal = Modal()
      .blocks(Blocks.Divider());
    const blocks = modal.getBlocks();

    expect(modal.isBuilt).toBeTruthy();
    expect(blocks).toEqual(expect.arrayContaining(modal.result.blocks));
  });

  test('Calling \'getBlocks()\' for HomeTab returns an array of Blocks', () => {
    const homeTab = HomeTab()
      .blocks(Blocks.Divider());
    const blocks = homeTab.getBlocks();

    expect(homeTab.isBuilt).toBeTruthy();
    expect(blocks).toEqual(expect.arrayContaining(homeTab.result.blocks));
  });
});
