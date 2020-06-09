const blockMocks = require('../../blocks/mocks');
const elementMocks = require('../../elements/mocks');
const bitMocks = require('../../bits/mocks');

const valid = {
  isString: 'sting',
  areStrings: ['string, string'],
  isInt: 123,
  isBool: true,
  isDate: new Date(),
  areBlocks: [blockMocks.File.mock, blockMocks.Image.mock, blockMocks.Divider.mock],
  isElement: elementMocks.Button.mock,
  areElementsOrStrings: [elementMocks.Button.mock, elementMocks.TextInput.mock, 'hello'],
  isOption: bitMocks.Option.mock,
  areOptions: [bitMocks.Option.mock, bitMocks.Option.mock, bitMocks.Option.mock],
  areOptionGroups: [bitMocks.OptionGroup.mock, bitMocks.OptionGroup.mock, bitMocks.OptionGroup.mock],
  isConfirmationDialogOrString: bitMocks.ConfirmationDialog.mock,
  isButtonStyleEnum: 'primary',
  areStringsOrImages: [elementMocks.Image.mock, 'string'],
  isResponseTypeEnum: 'ephemeral',
  isTimestamp: 1355517523.000005,
};

const invalid = {
  isString: 123,
  areStrings: [123, 123],
  isInt: true,
  isBool: 123,
  isDate: 'date',
  areBlocks: [elementMocks.Button.mock, elementMocks.TextInput.mock, elementMocks.UserMultiSelect.mock],
  isElement: bitMocks.Option.mock,
  areElements: [blockMocks.File.mock, blockMocks.Image.mock, blockMocks.Divider.mock],
  isOption: elementMocks.Button.mock,
  areOptions: [bitMocks.OptionGroup.mock, bitMocks.OptionGroup.mock, bitMocks.OptionGroup.mock],
  areOptionGroups: [bitMocks.Option.mock, bitMocks.Option.mock, bitMocks.Option.mock],
  isConfirmationDialogOrString: 123,
  isButtonStyleEnum: 'enum',
  areStringsOrImages: [bitMocks.OptionGroup.mock, bitMocks.OptionGroup.mock, bitMocks.OptionGroup.mock],
  isResponseTypeEnum: 'public',
  isTimestamp: 'abcd',
};

module.exports = { valid, invalid };