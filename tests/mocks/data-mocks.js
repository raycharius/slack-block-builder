const blockMocks = require('../blocks/mocks');
const elementMocks = require('../elements/mocks');
const bitMocks = require('../bits/mocks');

module.exports = {
  string: 'string',
  arrayStrings: ['string', 'string'],
  int: 123,
  bool: true,
  date: new Date(),
  arrayBlocks: [blockMocks.File.mock, blockMocks.Image.mock, blockMocks.Divider.mock],
  element: elementMocks.Button.mock,
  arrayElements: [elementMocks.Button.mock, elementMocks.TextInput.mock, elementMocks.UserMultiSelect.mock],
  option: bitMocks.Option.mock,
  arrayOptions: [bitMocks.Option.mock, bitMocks.Option.mock, bitMocks.Option.mock],
  optionGroups: [bitMocks.OptionGroup.mock, bitMocks.OptionGroup.mock, bitMocks.OptionGroup.mock],
  confirmationDialog: bitMocks.ConfirmationDialog.mock,
  primary: 'primary',
  danger: 'danger',
  arrayStringImages: [elementMocks.Image.mock, 'string'],
  globallyInvalid: [0, 1, 2, 3, 4, 5],
  timestamp: 1355517523,
  ephemeral: 'ephemeral',
  inChannel: 'in_channel',
};
