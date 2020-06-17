const { Modal, Message, HomeTab, Blocks } = require('../../src');

describe('Surfaces', () => {
  test('Calling \'buildObject()\' builds the view and returns an object', () => {
    const modal = Modal()
      .title('Some Modal')
      .blocks(Blocks.Divider());
    const result = modal.buildToObject();

    expect(modal.hasBeenBuilt).toBeTruthy();
    expect(result).toEqual(modal.result);
  });

  test('Calling \'buildJSON()\' builds the view and returns a string', () => {
    const modal = Modal()
      .title('Some Modal')
      .blocks(Blocks.Divider());
    const result = modal.buildToJSON();

    expect(modal.hasBeenBuilt).toBeTruthy();
    expect(result).toEqual(JSON.stringify(modal.result));
  });

  test('Calling \'printPreviewUrl()\' for Modal and HomeTabs logs the URL to the console', () => {
    const modal = Modal()
      .title('Some Modal')
      .blocks(Blocks.Divider());

    jest.spyOn(console, 'log');

    modal.printPreviewUrl();

    expect(console.log).toHaveBeenCalled();
  });

  test('Calling \'printPreviewUrl()\' for Message logs the URL to the console', () => {
    const message = Message()
      .blocks(Blocks.Divider());

    jest.spyOn(console, 'log');

    message.printPreviewUrl();

    expect(console.log).toHaveBeenCalled();
  });

  test('Calling \'getBlocks()\' for Message returns an array of Blocks', () => {
    const message = Message()
      .blocks(Blocks.Divider());
    const blocks = message.getBlocks();

    expect(message.hasBeenBuilt).toBeTruthy();
    expect(blocks).toEqual(expect.arrayContaining(message.result.blocks));
  });

  test('Calling \'getBlocks()\' for Modal returns an array of Blocks', () => {
    const modal = Modal()
      .blocks(Blocks.Divider());
    const blocks = modal.getBlocks();

    expect(modal.hasBeenBuilt).toBeTruthy();
    expect(blocks).toEqual(expect.arrayContaining(modal.result.blocks));
  });

  test('Calling \'getBlocks()\' for HomeTab returns an array of Blocks', () => {
    const homeTab = HomeTab()
      .blocks(Blocks.Divider());
    const blocks = homeTab.getBlocks();

    expect(homeTab.hasBeenBuilt).toBeTruthy();
    expect(blocks).toEqual(expect.arrayContaining(homeTab.result.blocks));
  });
});