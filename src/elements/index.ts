/* eslint-disable max-len */

import { ButtonElement, ButtonParams } from './button';
import { ChannelMultiSelectElement, ChannelMultiSelectParams } from './channel-multi-select';
import { ChannelSelectElement, ChannelSelectParams } from './channel-select';
import { CheckboxesElement, CheckboxesParams } from './checkboxes';
import { ConversationMultiSelectElement, ConversationMultiSelectParams } from './conversation-multi-select';
import { ConversationSelectElement, ConversationSelectParams } from './conversation-select';
import { DatePickerElement, DatePickerParams } from './datepicker';
import { ExternalMultiSelectElement, ExternalMultiSelectParams } from './external-multi-select';
import { ExternalSelectElement, ExternalSelectParams } from './external-select';
import { ImgElement, ImgParams } from './img';
import { OverflowMenuElement, OverflowMenuParams } from './overflow-menu';
import { RadioButtonsElement, RadioButtonsParams } from './radio-buttons';
import { StaticMultiSelectElement, StaticMultiSelectParams } from './static-multi-select';
import { StaticSelectElement, StaticSelectParams } from './static-select';
import { TextInputElement, TextInputParams } from './text-input';
import { TimePickerElement, TimePickerParams } from './timepicker';
import { UserMultiSelectElement, UserMultiSelectParams } from './user-multi-select';
import { UserSelectElement, UserSelectParams } from './user-select';

/**
 * Functions here do not use arrow functions stored in variables for IDE color compatibility.
 */

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.text] Sets the display text for the button.
 * @param {string} [params.url] Sets the URL to redirect the user to when this button is clicked.
 * @param {string} [params.value] Sets the value to be passed to your app when this button is clicked.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#button|View in Slack API Documentation}
 */

export function Button(params?: ButtonParams): ButtonElement {
  return new ButtonElement(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 * @param {int} [params.maxSelectedItems] Sets a limit to how many items the user can select.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#channel_multi_select|View in Slack API Documentation}
 */

export function ChannelMultiSelect(params?: ChannelMultiSelectParams): ChannelMultiSelectElement {
  return new ChannelMultiSelectElement(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 * @param {string} [params.initialChannel] Sets the default selected item in the menu.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#channel_select|View in Slack API Documentation}
 */

export function ChannelSelect(params?: ChannelSelectParams): ChannelSelectElement {
  return new ChannelSelectElement(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#checkboxes|View in Slack API Documentation}
 */

export function Checkboxes(params?: CheckboxesParams): CheckboxesElement {
  return new CheckboxesElement(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 * @param {int} [params.maxSelectedItems] Sets a limit to how many items the user can select.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#conversation_multi_select|View in Slack API Documentation}
 */

export function ConversationMultiSelect(params?: ConversationMultiSelectParams): ConversationMultiSelectElement {
  return new ConversationMultiSelectElement(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 * @param {string} [params.initialConversation] Sets the default selected item in the menu.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#conversation_multi_select|View in Slack API Documentation}
 */

export function ConversationSelect(params?: ConversationSelectParams): ConversationSelectElement {
  return new ConversationSelectElement(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 * @param {string} [params.initialDate] Sets the default selected date in the menu.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#datepicker|View in Slack API Documentation}
 */

export function DatePicker(params?: DatePickerParams): DatePickerElement {
  return new DatePickerElement(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 * @param {int} [params.maxSelectedItems] Sets a limit to how many items the user can select.
 * @param {int} [params.minQueryLength] Sets a minimum number of characters types before querying your options URL.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#external_multi_select|View in Slack API Documentation}
 */

export function ExternalMultiSelect(params?: ExternalMultiSelectParams): ExternalMultiSelectElement {
  return new ExternalMultiSelectElement(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 * @param {int} [params.minQueryLength] Sets a minimum number of characters types before querying your options URL.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#external_select|View in Slack API Documentation}
 */

export function ExternalSelect(params?: ExternalSelectParams): ExternalSelectElement {
  return new ExternalSelectElement(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.imageUrl] Sets the source URL from which the image will be loaded.
 * @param {string} [params.altText] Sets the textual summary of the image.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#image|View in Slack API Documentation}
 */

export function Img(params?: ImgParams): ImgElement {
  return new ImgElement(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#overflow|View in Slack API Documentation}
 */

export function OverflowMenu(params?: OverflowMenuParams): OverflowMenuElement {
  return new OverflowMenuElement(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#radio|View in Slack API Documentation}
 */

export function RadioButtons(params?: RadioButtonsParams): RadioButtonsElement {
  return new RadioButtonsElement(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 * @param {int} [params.maxSelectedItems] Sets a limit to how many items the user can select.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#static_multi_select|View in Slack API Documentation}
 */

export function StaticMultiSelect(params?: StaticMultiSelectParams): StaticMultiSelectElement {
  return new StaticMultiSelectElement(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#static_select|View in Slack API Documentation}
 */

export function StaticSelect(params?: StaticSelectParams): StaticSelectElement {
  return new StaticSelectElement(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 * @param {string} [params.initialValue] Sets the default text entered into the text input at modal render.
 * @param {int} [params.minLength] Sets a minimum character count in order for the user to submit the form.
 * @param {int} [params.maxLength] Sets a maximum character count allowed to send the form.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#input|View in Slack API Documentation}
 */

export function TextInput(params?: TextInputParams): TextInputElement {
  return new TextInputElement(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 * @param {string} [params.initialTime] Sets the default selected time in the menu.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#timepicker|View in Slack API Documentation}
 */

export function TimePicker(params?: TimePickerParams): TimePickerElement {
  return new TimePickerElement(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 * @param {int} [params.maxSelectedItems] Sets a limit to how many items the user can select.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#users_multi_select|View in Slack API Documentation}
 */

export function UserMultiSelect(params?: UserMultiSelectParams): UserMultiSelectElement {
  return new UserMultiSelectElement(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads.
 * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with.
 * @param {string} [params.initialUser] Setts the default selected user in the menu.
 *
 * {@link https://api.slack.com/reference/block-kit/block-elements#users_select|View in Slack API Documentation}
 */

export function UserSelect(params?: UserSelectParams): UserSelectElement {
  return new UserSelectElement(params);
}

const elementObjects = {
  Button,
  ChannelMultiSelect,
  ChannelSelect,
  Checkboxes,
  ConversationMultiSelect,
  ConversationSelect,
  DatePicker,
  ExternalMultiSelect,
  ExternalSelect,
  Img,
  OverflowMenu,
  RadioButtons,
  StaticMultiSelect,
  StaticSelect,
  TextInput,
  TimePicker,
  UserMultiSelect,
  UserSelect,
};

/**
 * Exported in this way so that the color coding in IDEs for this object differs from the functions it contains.
 */

export { elementObjects as Elements };
