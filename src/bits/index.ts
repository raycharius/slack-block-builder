/* eslint-disable max-len */

import { AttachmentBuilder, AttachmentParams } from './attachment';
import { ConfirmationDialogBuilder, ConfirmationDialogParams } from './confirmation-dialog';
import { OptionBuilder, OptionParams } from './option';
import { OptionGroupBuilder, OptionGroupParams } from './option-group';
import { WorkflowBuilder, WorkflowParams } from './workflow';

export type {
  AttachmentBuilder,
  AttachmentParams,
  ConfirmationDialogBuilder,
  ConfirmationDialogParams,
  OptionBuilder,
  OptionParams,
  OptionGroupBuilder,
  OptionGroupParams,
  WorkflowBuilder,
  WorkflowParams,
};

/**
 * Functions here do not use arrow functions stored in variables for IDE color compatibility.
 */

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.color] Sets the color of the block quote border.
 *
 * {@link https://api.slack.com/reference/messaging/attachments|View in Slack API Documentation}
 */

export function Attachment(params?: AttachmentParams): AttachmentBuilder {
  return new AttachmentBuilder(params);
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

export function ConfirmationDialog(params?: ConfirmationDialogParams): ConfirmationDialogBuilder {
  return new ConfirmationDialogBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.text] Sets the text displayed in the menu for the current option.
 * @param {string} [params.value] Sets the value passed to your app when this OptionBuilder is clicked or submitted.
 * @param {string} [params.description] Sets a description shown next to the option, if in a radio button input.
 * @param {string} [params.url] Sets the URL to redirect the user to when this option is clicked, if in an overlow menu.
 *
 * {@link https://api.slack.com/reference/block-kit/composition-objects#option|View in Slack API Documentation}
 */

export function Option(params?: OptionParams): OptionBuilder {
  return new OptionBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.label] Sets the label shown above the group of option.
 *
 * {@link https://api.slack.com/reference/block-kit/composition-objects#option_group|View in Slack API Documentation}
 */

export function OptionGroup(params?: OptionGroupParams): OptionGroupBuilder {
  return new OptionGroupBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.trigger] Sets the trigger object that contains information about a workflow's trigger.
 *
 * {@link https://api.slack.com/reference/block-kit/composition-objects#workflow|View in Slack API Documentation}
 */

export function Workflow(params?: WorkflowParams): WorkflowBuilder {
  return new WorkflowBuilder(params);
}

const bits = {
  Attachment,
  ConfirmationDialog,
  Option,
  OptionGroup,
  Workflow,
};

// Strange export. I know. For IDE highlighting purposes.

export { bits as Bits };
