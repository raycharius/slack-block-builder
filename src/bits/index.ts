/* eslint-disable max-len */

import { AttachmentBit, AttachmentParams } from './attachment';
import { ConfirmationDialogBit, ConfirmationDialogParams } from './confirmation-dialog';
import { OptionBit, OptionParams } from './option';
import { OptionGroupBit, OptionGroupParams } from './option-group';

/**
 * Functions here do not use arrow functions stored in variables for IDE color compatibility.
 */

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.color] Sets the color of the block quote border.
 *
 * {@link https://api.slack.com/reference/messaging/attachments|View in Slack API Documentation}
 */

export function Attachment(params?: AttachmentParams): AttachmentBit {
  return new AttachmentBit(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.title] Sets the title displayed in the confirmation dialog.
 * @param {string} [params.text] Sets the textual content of the confirmation dialog.
 * @param {string} [params.confirm] Sets the text for the button that confirms the action.
 * @param {string} [params.deny]Sets the text for the button that cancels the action.
 *
 * {@link https://api.slack.com/reference/block-kit/composition-objects#confirm|View in Slack API Documentation}
 */

export function ConfirmationDialog(params?: ConfirmationDialogParams): ConfirmationDialogBit {
  return new ConfirmationDialogBit(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.text] Sets the text displayed in the menu for the current option.
 * @param {string} [params.value] Sets the value passed to your app when this OptionBit is clicked or submitted.
 * @param {string} [params.description] Sets a description shown next to the option, if in a radio button input.
 * @param {string} [params.url] Sets the URL to redirect the user to when this option is clicked, if in an overlow menu.
 *
 * {@link https://api.slack.com/reference/block-kit/composition-objects#option|View in Slack API Documentation}
 */

export function Option(params?: OptionParams): OptionBit {
  return new OptionBit(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.label] Sets the label shown above the group of option.
 *
 * {@link https://api.slack.com/reference/block-kit/composition-objects#option_group|View in Slack API Documentation}
 */

export function OptionGroup(params?: OptionGroupParams): OptionGroupBit {
  return new OptionGroupBit(params);
}

const bitObjects = {
  Attachment,
  ConfirmationDialog,
  Option,
  OptionGroup,
};

/**
 * Exported in this way so that the color coding in IDEs for this object differs from the functions it contains.
 */

export { bitObjects as Bits };
