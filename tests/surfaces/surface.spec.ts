import {
  Modal,
  Message,
  HomeTab,
  Blocks,
  Bits,
} from '../../src';

describe('Surfaces', () => {
  test('Calling \'buildToObject()\' builds the view and returns an object.', () => {
    const modal = Modal()
      .title('Some Modal')
      .blocks(Blocks.Divider());
    const result = modal.buildToObject();

    expect(result).toEqual(modal.build());
  });

  test('Calling \'buildJSON()\' builds the view and returns a string.', () => {
    const modal = Modal()
      .title('Some Modal')
      .blocks(Blocks.Divider());
    const result = modal.buildToJSON();

    expect(result).toEqual(JSON.stringify(modal.build()));
  });

  test('Calling \'getPreviewUrl()\' for HomeTab returns the URL as a string.', () => {
    const modal = HomeTab()
      .blocks(Blocks.Divider());

    const result = modal.getPreviewUrl();

    expect(result).toEqual('https://app.slack.com/block-kit-builder/#%7B%22blocks%22:%5B%7B%22type%22:%22divider%22%7D%5D,%22type%22:%22home%22%7D');
  });

  test('Calling \'getPreviewUrl()\' for Modal returns the URL as a string.', () => {
    const message = Modal({ submit: 'Start' })
      .blocks(Blocks.Divider());

    const result = message.getPreviewUrl();

    expect(result).toEqual('https://app.slack.com/block-kit-builder/#%7B%22submit%22:%7B%22type%22:%22plain_text%22,%22text%22:%22Start%22%7D,%22blocks%22:%5B%7B%22type%22:%22divider%22%7D%5D,%22type%22:%22modal%22%7D');
  });

  test('Calling \'printPreviewUrl()\' for HomeTab logs the URL to the console.', () => {
    const modal = HomeTab()
      .blocks(Blocks.Divider());

    jest.spyOn(console, 'log');

    modal.printPreviewUrl();

    // eslint-disable-next-line no-console
    expect(console.log).toHaveBeenCalled();
  });

  test('Calling \'printPreviewUrl()\' for Modal logs the URL to the console.', () => {
    const message = Modal()
      .blocks(Blocks.Divider());

    jest.spyOn(console, 'log');

    message.printPreviewUrl();

    // eslint-disable-next-line no-console
    expect(console.log).toHaveBeenCalled();
  });

  test('Calling \'getBlocks()\' for Message should return an array of Blocks.', () => {
    const message = Modal()
      .blocks(Blocks.Divider());
    const blocks = message.getBlocks();

    expect(blocks).toEqual(expect.arrayContaining(message.build().blocks));
  });

  test('Calling \'getAttachments()\' for Message should return an array of Attachments.', () => {
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

    expect(attachments).toEqual(expect.arrayContaining(message.build().attachments!));
  });

  test('Calling \'getBlocks()\' for Modal should return an array of Blocks.', () => {
    const modal = Modal()
      .blocks(Blocks.Divider());
    const blocks = modal.getBlocks();

    expect(blocks).toEqual(expect.arrayContaining(modal.build().blocks));
  });

  test('Calling \'getBlocks()\' for HomeTab should return an array of Blocks.', () => {
    const homeTab = HomeTab()
      .blocks(Blocks.Divider());
    const blocks = homeTab.getBlocks();

    expect(blocks).toEqual(expect.arrayContaining(homeTab.build().blocks));
  });
});
