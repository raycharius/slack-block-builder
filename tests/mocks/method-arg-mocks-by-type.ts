import * as bitMocks from '../bits/mocks';
import * as blockMocks from '../blocks/mocks';
import * as elementMocks from '../elements/mocks';

export const methodArgMocksByType = {
  string: 'string',
  arrayStrings: ['string', 'string'],
  int: 123,
  bool: true,
  date: new Date(),
  arrayBlocks: [blockMocks.File.mock, blockMocks.Image.mock, blockMocks.Divider.mock],
  element: elementMocks.Button.mock,
  arrayElements: [
    elementMocks.Button.mock,
    elementMocks.TextInput.mock,
    elementMocks.UserMultiSelect.mock,
  ],
  option: bitMocks.Option.mock,
  arrayOptions: [bitMocks.Option.mock, bitMocks.Option.mock, bitMocks.Option.mock],
  optionGroups: [bitMocks.OptionGroup.mock, bitMocks.OptionGroup.mock, bitMocks.OptionGroup.mock],
  confirmationDialog: bitMocks.ConfirmationDialog.mock,
  primary: 'primary',
  danger: 'danger',
  arrayStringImages: [elementMocks.Img.mock, 'string'],
  globallyInvalid: [0, 1, 2, 3, 4, 5],
  timestamp: 1355517523,
  ephemeral: 'ephemeral',
  inChannel: 'in_channel',
  arrayAttachments: [bitMocks.Attachment.mock, bitMocks.Attachment.mock, bitMocks.Attachment.mock],
  time: '21:45',
  falseBool: false,
  onEnterPressed: 'on_enter_pressed',
  onCharacterEntered: 'on_character_entered',
  trigger: { url: 'string', customizableInputParameters: { parameter: 'string' } },
  workflow: bitMocks.Workflow.mock,
};
