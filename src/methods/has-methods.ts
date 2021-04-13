/* eslint-disable max-classes-per-file */
/* eslint-disable max-len */

import { PropSetter } from '../lib';
import { props, values } from '../constants';

// Import Bits for type checks

import type { AttachmentBit } from '../bits/attachment';
import type { ConfirmationDialogBit } from '../bits/confirmation-dialog';
import type { OptionBit } from '../bits/option';
import type { OptionGroupBit } from '../bits/option-group';

// Import Elements for type checks

import type { ButtonElement } from '../elements/button';
import type { ChannelMultiSelectElement } from '../elements/channel-multi-select';
import type { ChannelSelectElement } from '../elements/channel-select';
import type { CheckboxesElement } from '../elements/checkboxes';
import type { ConversationMultiSelectElement } from '../elements/conversation-multi-select';
import type { ConversationSelectElement } from '../elements/conversation-select';
import type { DatePickerElement } from '../elements/datepicker';
import type { ExternalMultiSelectElement } from '../elements/external-multi-select';
import type { ExternalSelectElement } from '../elements/external-select';
import type { ImgElement } from '../elements/img';
import type { OverflowMenuElement } from '../elements/overflow-menu';
import type { RadioButtonsElement } from '../elements/radio-buttons';
import type { StaticMultiSelectElement } from '../elements/static-multi-select';
import type { StaticSelectElement } from '../elements/static-select';
import type { TextInputElement } from '../elements/text-input';
import type { TimePickerElement } from '../elements/timepicker';
import type { UserMultiSelectElement } from '../elements/user-multi-select';
import type { UserSelectElement } from '../elements/user-select';

// Import Blocks for type checks

import type { ActionsBlock } from '../blocks/actions';
import type { ContextBlock } from '../blocks/context';
import type { DividerBlock } from '../blocks/divider';
import type { FileBlock } from '../blocks/file';
import type { HeaderBlock } from '../blocks/header';
import type { ImageBlock } from '../blocks/image';
import type { InputBlock } from '../blocks/input';
import type { SectionBlock } from '../blocks/section';

// Declare necessary types for type checks

type Element =
  ButtonElement
  | ChannelMultiSelectElement
  | ChannelSelectElement
  | CheckboxesElement
  | ConversationMultiSelectElement
  | ConversationSelectElement
  | DatePickerElement
  | ExternalMultiSelectElement
  | ExternalSelectElement
  | ImgElement
  | OverflowMenuElement
  | RadioButtonsElement
  | StaticMultiSelectElement
  | StaticSelectElement
  | TextInputElement
  | TimePickerElement
  | UserMultiSelectElement
  | UserSelectElement;

type Block =
  ActionsBlock
  | ContextBlock
  | DividerBlock
  | FileBlock
  | HeaderBlock
  | ImageBlock
  | InputBlock
  | SectionBlock;

type ContextElement = ImgElement | string;

export abstract class HasAccessory extends PropSetter {
  /**
   * @description Adds an element to the section block of your view or message.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum of 1 element.
   *    * Can be any one of the elements.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public accessory(element: Element): this {
    return this.set(element, props.accessory);
  }
}

export abstract class HasActionId extends PropSetter {
  /**
   * @description Sets a string to be an identifier for the action taken by the user. It is sent back to your app in the interaction payload when the element is interacted or when the view is submitted.
   *
   * **Slack Validation Rules and Tips:**
   *    * **Required** ⚠
   *    * Each element in a view or message must have its own unique action ID.
   *    * Maximum of 255 characters.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public actionId(actionId: string): this {
    return this.set(actionId, props.actionId);
  }
}

export abstract class HasAltText extends PropSetter {
  /**
   * @description This a plain-text summary of the image element or block.
   *
   * **Slack Validation Rules and Tips:**
   *    * **Required** ⚠
   *    * Should not contain any markup.
   *    * Maximum of 2000 characters.
   *
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public altText(altText: string): this {
    return this.set(altText, props.altText);
  }
}

export abstract class HasAsUser extends PropSetter {
  /**
   * @description Sets the message to be sent as either the user whose auth token is being used or as the bot user associated with your app.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public asUser(boolean = true): this {
    return this.set(boolean, props.asUser);
  }
}

export abstract class HasAttachments extends PropSetter {
  /**
   * @description Adds attachments to your message.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public attachments(...attachments: Array<AttachmentBit | AttachmentBit[]>): this {
    return this.append(attachments.flat(), props.attachments);
  }
}

export abstract class HasBlockId extends PropSetter {
  /**
   * @description Sets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum of 255 characters.
   *    * Each block in a view or message must have its own unique action ID.
   *    * If the contents of a block is updated, the block ID should also be updated.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public blockId(blockId: string): this {
    return this.set(blockId, props.blockId);
  }
}

export abstract class HasBlocks extends PropSetter {
  /**
   * @description Adds blocks to your view or message.
   *
   * **Slack Validation Rules and Tips:**
   *    * **Required for modals, home tabs, and workflow steps** ⚠
   *    * Maximum of 100 blocks.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public blocks(...blocks: Array<Block | Block[]>): this {
    return this.append(blocks.flat(), props.blocks);
  }
}

export abstract class HasCallbackId extends PropSetter {
  /**
   * @description Sets a string for your view that is sent back to your server in all of the interaction payloads and view submissions. Used to identify the view from which the interaction payload is generated.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum of 255 characters.
   *    * It is recommended that sensitive data not be stored in the callback ID. Instead, use the `privateMetaData()` method.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public callbackId(callbackId: string): this {
    return this.set(callbackId, props.callbackId);
  }
}

export abstract class HasChannel extends PropSetter {
  /**
   * @description Sets the Slack channel ID to which the message will be sent via the API.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public channel(channel: string): this {
    return this.set(channel, props.channel);
  }
}

export abstract class HasClearOnClose extends PropSetter {
  /**
   * @description Instructs the Slack API to close all open views in the view stack when this particular view is closed.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public clearOnClose(boolean = true): this {
    return this.set(boolean, props.clearOnClose);
  }
}

export abstract class HasClose extends PropSetter {
  /**
   * @description Sets the text displayed on the button that closes the view.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum of 24 characters.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public close(closeButtonText: string): this {
    return this.set(closeButtonText, props.close);
  }
}

export abstract class HasColor extends PropSetter {
  /**
   * @description Sets the color for the blockquote border to the left of the attachment.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public color(color: string): this {
    return this.set(color, props.color);
  }
}

export abstract class HasConfirm extends PropSetter {
  /**
   * @description Adds a confirmation dialog that is displayed when the user interacts with the element to confirm the selection or action.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public confirm(confirmationDialog: ConfirmationDialogBit): this {
    return this.set(confirmationDialog, props.confirm);
  }
}

export abstract class HasConfirmForBit extends PropSetter {
  /**
   * @description Sets the text of the button that confirms the action to which the confirmation dialog has been added.
   *
   * **Slack Validation Rules and Tips:**
   *    * **Required** ⚠
   *    * Maximum of 30 characters.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public confirm(text: string): this {
    return this.set(text, props.confirm);
  }
}

export abstract class HasDanger extends PropSetter {
  /**
   * @description For a button element, this changes the color to red. For confirmation dialogs, this sets the main button in the bottom right corner to red, indicating that an action is potentially destructive.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public danger(boolean = true): this {
    if (boolean) {
      return this.set(values.danger, props.style);
    }

    return this;
  }
}

export abstract class HasDefaultToCurrentConversation extends PropSetter {
  /**
   * @description Pre-populates the select menu with the conversation that the user was viewing when they opened the modal, if available.
   *
   * **Slack Validation Rules and Tips:**
   *    * If initial conversations are provided, this option is ignored.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public defaultToCurrentConversation(boolean = true): this {
    return this.set(boolean, props.defaultToCurrentConversation);
  }
}

export abstract class HasDeleteOriginal extends PropSetter {
  /**
   * @description Instructs the Slack API to delete the message from which the interaction originated when sending the current message.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public deleteOriginal(boolean = true): this {
    return this.set(boolean, props.deleteOriginal);
  }
}

export abstract class HasDeny extends PropSetter {
  /**
   * @description Sets the text of the button that is meant to cancel the action or which the confirmation dialog was called.
   *
   * **Slack Validation Rules and Tips:**
   *    * **Required** ⚠
   *    * Maximum of 30 characters.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public deny(text: string): this {
    return this.set(text, props.deny);
  }
}

export abstract class HasDescription extends PropSetter {
  /**
   * @description Sets the descriptive text displayed below the text field of the option.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum of 75 characters.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public description(description: string): this {
    return this.set(description, props.description);
  }
}

export abstract class HasDispatchAction extends PropSetter {
  /**
   * @description Instructs the Slack API to send an interaction event to your app when the element in the input block has been interacted with.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public dispatchAction(boolean = true): this {
    return this.set(boolean, props.dispatchAction);
  }
}

export abstract class HasDispatchActionOnCharacterEntered extends PropSetter {
  /**
   * @description Instructs the Slack API to dispatch an interaction payload to your app when the user enters or deletes a character in the input.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public dispatchActionOnCharacterEntered(boolean = true): this {
    if (boolean) {
      return this.set(values.onCharacterEntered, props.onCharacterEntered);
    }

    return this;
  }
}

export abstract class HasDispatchActionOnEnterPressed extends PropSetter {
  /**
   * @description Instructs the Slack API to dispatch an interaction payload to your app when the user presses the enter key while the input is in focus.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public dispatchActionOnEnterPressed(boolean = true): this {
    if (boolean) {
      return this.set(values.onEnterPressed, props.onEnterPressed);
    }

    return this;
  }
}

export abstract class HasElement extends PropSetter {
  /**
   * @description Adds a user input element to the input block for gathering information from the user.
   *
   * **Slack Validation Rules and Tips:**
   *    * **Required** ⚠
   *    * Maximum of 1 element.
   *    * Supports text inputs, select and multi-select menus, as well as date pickers and checkbox inputs.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public element(element: Element): this {
    return this.set(element, props.element);
  }
}

export abstract class HasElements extends PropSetter {
  /**
   * @description Adds elements to the actions block.
   *
   * **Slack Validation Rules and Tips:**
   *    * **Required** ⚠
   *    * Maximum of 5 elements.
   *    * Supported elements are buttons, select and overflow menus, and date pickers.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public elements(...elements: Array<Element | Element[]>): this {
    return this.append(elements.flat(), props.elements);
  }
}

export abstract class HasElementsForContext extends PropSetter {
  /**
   * @description Adds elements to the context block.
   *
   * **Slack Validation Rules and Tips:**
   *    * **Required** ⚠
   *    * Maximum of 10 elements.
   *    * Supported elements include image elements and strings.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public elements(...elements: Array<ContextElement | ContextElement[]>): this {
    return this.append(elements.flat(), props.elements);
  }
}

export abstract class HasEnd extends PropSetter {
  /**
   * @description Performs no alterations to the object on which it is called. It is meant to simulate a closing HTML tag for those who prefer to have an explicit end declared for an object.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public end(): this {
    return this;
  }
}

export abstract class HasEphemeral extends PropSetter {
  /**
   * @description Instructs the Slack API to display the message only to the user who invoked the interaction payload or slash command.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public ephemeral(boolean = true): this {
    if (boolean) {
      return this.set(values.ephemeral, props.responseType);
    }

    return this;
  }
}

export abstract class HasExcludeExternalSharedChannels extends PropSetter {
  /**
   * @description Excludes conversations shared with external organizations from the menu's options.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public excludeExternalSharedChannels(boolean = true): this {
    return this.set(boolean, props.excludeExternalSharedChannels);
  }
}

export abstract class HasExcludeBotUsers extends PropSetter {
  /**
   * @description Excludes conversations with bot users from the menu's options.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public excludeBotUsers(boolean = true): this {
    return this.set(boolean, props.excludeBotUsers);
  }
}

export abstract class HasExternalId extends PropSetter {
  /**
   * @description Sets a custom identifier for a view or file that must be unique for all views on a per-team basis.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum of 255 characters.
   *    * When used, an external ID must be unique to a certain view.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public externalId(externalId: string): this {
    return this.set(externalId, props.externalId);
  }
}

export abstract class HasFallback extends PropSetter {
  /**
   * @description Sets the plain text summary of the attachment used in clients that can't display formatted text (eg. IRC, mobile notifications).
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public fallback(text: string): this {
    return this.set(text, props.fallback);
  }
}

export abstract class HasFields extends PropSetter {
  /**
   * @description Adds text fields to the section block, in two columns, side-by-side.
   *
   * **Slack Validation Rules and Tips:**
   *    * **Required if the text property is undefined** ⚠
   *    * Maximum of 10 items.
   *    * Maximum of 2000 characters for each field.
   *    * Markdown supported.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public fields(...fields: Array<string | string[]>): this {
    return this.append(fields.flat(), props.fields);
  }
}

export abstract class HasFilter extends PropSetter {
  /**
   * @description Defines which conversations should be included in the list.
   *
   * **Slack Validation Rules and Tips:**
   *    * Possible values are *im*, *impm*, *private*, and *public*.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public filter(...filters: Array<string | string[]>): this {
    return this.append(filters.flat(), props.filter);
  }
}

export abstract class HasHint extends PropSetter {
  /**
   * @description Adds a hint below the input block to provide users with more context or instructions for using the input.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum of 2000 characters.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public hint(hint: string): this {
    return this.set(hint, props.hint);
  }
}

export abstract class HasIgnoreMarkdown extends PropSetter {
  /**
   * @description Instructs the Slack API to ignore any markdown in the text property of the message.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public ignoreMarkdown(boolean = false): this {
    return this.set(boolean, props.mrkdwn);
  }
}

export abstract class HasImageUrl extends PropSetter {
  /**
   * @description Sets the source URL for the image block or element that you wish to include in your view or message.
   *
   * **Slack Validation Rules and Tips:**
   *    * **Required** ⚠
   *    * Maximum of 2000 characters.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public imageUrl(url: string): this {
    return this.set(url, props.imageUrl);
  }
}

export abstract class HasInChannel extends PropSetter {
  /**
   * @description Instructs the Slack API to make the message visible to everyone in the channel from which the interaction payload or slash command originated.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public inChannel(boolean = true): this {
    if (boolean) {
      return this.set(values.inChannel, props.responseType);
    }

    return this;
  }
}

export abstract class HasInitialChannel extends PropSetter {
  /**
   * @description Pre-populates the menu with a selected, default channel.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialChannel(channelId: string): this {
    return this.set(channelId, props.initialChannel);
  }
}

export abstract class HasInitialChannels extends PropSetter {
  /**
   * @description Pre-populates the menu with selected, default channels.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialChannels(...channelIds: Array<string | string[]>): this {
    return this.append(channelIds.flat(), props.initialChannels);
  }
}

export abstract class HasInitialConversation extends PropSetter {
  /**
   * @description Pre-populates the menu with a selected, default conversation.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialConversation(conversationId: string): this {
    return this.set(conversationId, props.initialConversation);
  }
}

export abstract class HasInitialConversations extends PropSetter {
  /**
   * @description Pre-populates the menu with selected, default conversations.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialConversations(...conversationIds: Array<string | string[]>): this {
    return this.append(conversationIds.flat(), props.initialConversations);
  }
}

export abstract class HasInitialDate extends PropSetter {
  /**
   * @description Pre-populates the date picker with a selected, default date.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialDate(date: Date): this {
    return this.set(date, props.initialDate);
  }
}

export abstract class HasInitialOption extends PropSetter {
  /**
   * @description Pre-populates the menu or date picker with a selected, default option.
   *
   * **Slack Validation Rules and Tips:**
   *    * Must be an exact match for one of the options in the menu.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialOption(option: OptionBit): this {
    return this.set(option, props.initialOption);
  }
}

export abstract class HasInitialOptions extends PropSetter {
  /**
   * @description Pre-populates the menu or checkbox input with selected, default options.
   *
   * **Slack Validation Rules and Tips:**
   *    * Must be exact matches to options in the menu.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialOptions(...options: Array<OptionBit | OptionBit[]>): this {
    return this.append(options.flat(), props.initialOptions);
  }
}

export abstract class HasInitialTime extends PropSetter {
  /**
   * @description Pre-populates the time picker with a selected, default time.
   *
   * **Slack Validation Rules and Tips:**
   *    * Set in HH:mm format, where HH is 24-hour hour format and mm is minutes with a leading zero.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialTime(time: string): this {
    return this.set(time, props.initialTime);
  }
}

export abstract class HasInitialUser extends PropSetter {
  /**
   * @description Pre-populates the menu with a selected, default user.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialUser(userId: string): this {
    return this.set(userId, props.initialUser);
  }
}

export abstract class HasInitialUsers extends PropSetter {
  /**
   * @description Pre-populates the menu with selected, default users.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialUsers(...userIds: Array<string | string[]>): this {
    return this.append(userIds.flat(), props.initialUsers);
  }
}

export abstract class HasInitialValue extends PropSetter {
  /**
   * @description Pre-populates the text input with default, editable text.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialValue(value: string): this {
    return this.set(value, props.initialValue);
  }
}

export abstract class HasLabel extends PropSetter {
  /**
   * @description For input blocks, this sets the text displayed in the label for the input. For an option group, it defines the text displayed as a title for the group.
   *
   * **Slack Validation Rules and Tips:**
   *    * **Required** ⚠
   *    * For input blocks, maximum of 2000 characters.
   *    * For option groups, maximum of 75 characters.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public label(label: string): this {
    return this.set(label, props.label);
  }
}

export abstract class HasMaxLength extends PropSetter {
  /**
   * @description Sets a maximum character count allowed in the given text input.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public maxLength(length: number): this {
    return this.set(length, props.maxLength);
  }
}

export abstract class HasMaxSelectedItems extends PropSetter {
  /**
   * @description Sets a limit to how many items the user can select in the multi-select menu.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public maxSelectedItems(quantity: number): this {
    return this.set(quantity, props.maxSelectedItems);
  }
}

export abstract class HasMinQueryLength extends PropSetter {
  /**
   * @description Sets a minimum number of characters required before Slack queries your app for a list of options.
   *
   * **Slack Validation Rules and Tips:**
   *    * If not set, the request will be sent on every character entered or removed.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public minQueryLength(length: number): this {
    return this.set(length, props.minQueryLength);
  }
}

export abstract class HasMinLength extends PropSetter {
  /**
   * @description Sets a minimum character count required for the given text input before the user can submit the view.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum 3000 characters.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public minLength(length: number): this {
    return this.set(length, props.minLength);
  }
}

export abstract class HasMultiline extends PropSetter {
  /**
   * @description Sets the text input to be a larger, multi-line input for larger portions of text.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public multiline(boolean = true): this {
    return this.set(boolean, props.multiline);
  }
}

export abstract class HasNotifyOnClose extends PropSetter {
  /**
   * @description Instructs the Slack API to send an interaction payload to your app when the view is closed.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public notifyOnClose(boolean = true): this {
    return this.set(boolean, props.notifyOnClose);
  }
}

export abstract class HasOptional extends PropSetter {
  /**
   * @description Lets the Slack API know that inputting data in the the input is not required for the view to be successfully submitted.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public optional(boolean = true): this {
    return this.set(boolean, props.optional);
  }
}

export abstract class HasOptionGroups extends PropSetter {
  /**
   * @description Adds organized groups of options to the select or multi-select menu, each with its own label or title.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum of 100 options.
   *    * Both options and options groups cannot be defined at the same time for any element.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public optionGroups(...optionGroups: Array<OptionGroupBit | OptionGroupBit[]>): this {
    return this.append(optionGroups.flat(), props.optionGroups);
  }
}

export abstract class HasOptions extends PropSetter {
  /**
   * @description Adds options to the select or multi-select menu.
   *
   * **Slack Validation Rules and Tips:**
   *    * **Required** ⚠
   *    * Maximum of 100 options.
   *    * Both options and options groups cannot be defined at the same time for any element.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public options(...options: Array<OptionBit | OptionBit[]>): this {
    return this.append(options.flat(), props.options);
  }
}

export abstract class HasPlaceholder extends PropSetter {
  /**
   * @description Defines the text displayed as a placeholder in the empty input element.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum of 150 characters.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public placeholder(placeholder: string): this {
    return this.set(placeholder, props.placeholder);
  }
}

export abstract class HasPostAt extends PropSetter {
  /**
   * @description Sets a time in the future for the message to be sent to the channel or user, as a scheduled message.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public postAt(timestamp: string): this {
    return this.set(timestamp, props.postAt);
  }
}

export abstract class HasPrimary extends PropSetter {
  /**
   * @description For a button element, this changes the color to green. For confirmation dialogs, this sets the main button in the bottom right corner to green, which is meant to confirm the action.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public primary(boolean = true): this {
    if (boolean) {
      return this.set(values.primary, props.style);
    }

    return this;
  }
}

export abstract class HasPrivateMetaData extends PropSetter {
  /**
   * @description Defines a string sent back to your server with view and interaction payloads.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum 3000 characters.
   *    * Typically used to persist data or store context between views.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public privateMetaData(privateMetaData: string): this {
    return this.set(privateMetaData, props.privateMetaData);
  }
}

export abstract class HasReplaceOriginal extends PropSetter {
  /**
   * @description Instructs the Slack API to replace the original message, from which the interaction payload originated, with the current message.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public replaceOriginal(boolean = true): this {
    return this.set(boolean, props.replaceOriginal);
  }
}

export abstract class HasResponseUrlEnabled extends PropSetter {
  /**
   * @description Instructs the Slack API to provide a response URL at view submission.
   *
   * **Slack Validation Rules and Tips:**
   *    * Only available in views with input blocks.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public responseUrlEnabled(boolean = true): this {
    return this.set(boolean, props.responseUrlEnabled);
  }
}

export abstract class HasSubmit extends PropSetter {
  /**
   * @description Sets the text displayed on the button that submits the view.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum of 24 characters.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public submit(text: string): this {
    return this.set(text, props.submit);
  }
}

export abstract class HasSubmitDisabled extends PropSetter {
  /**
   * @description Configures the workflow step to have a disabled submit button until the user has input data into one or more inputs.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public submitDisabled(boolean = true): this {
    return this.set(boolean, props.submitDisabled);
  }
}

export abstract class HasText extends PropSetter {
  /**
   * @description Sets the text displayed for buttons, headers, confirmation dialogs, sections, context blocks, and options.
   *
   * **Slack Validation Rules and Tips:**
   *    * **Required for buttons, headers, confirmation dialogs, and option** ⚠
   *    * **Required for sections if fields are not defined** ⚠
   *    * For buttons and options, maximum of 75 characters.
   *    * For confirmation dialogs, maximum of 75 characters.
   *    * For section and header blocks, maximum of 3000 characters.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public text(text: string): this {
    return this.set(text, props.text);
  }
}

export abstract class HasTitle extends PropSetter {
  /**
   * @description Sets the title displayed for the block, element, or confirmation dialog.
   *
   * **Slack Validation Rules and Tips:**
   *    * **Required for views and confirmation dialogs** ⚠
   *    * For views, maximum of 24 characters.
   *    * For images, maximum of 2000 characters.
   *    * For confirmation dialogs, maximum of 100 characters.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public title(title: string): this {
    return this.set(title, props.title);
  }
}

export abstract class HasThreadTs extends PropSetter {
  /**
   * @description Instructs the Slack API to send the message to the thread of the message associated with the timestamp.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public threadTs(threadTs: string): this {
    return this.set(threadTs, props.threadTs);
  }
}

export abstract class HasTs extends PropSetter {
  /**
   * @description Instructs the Slack API to use the message to replaced an existing message.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public ts(ts: string): this {
    return this.set(ts, props.ts);
  }
}

export abstract class HasUrl extends PropSetter {
  /**
   * @description Sets the URL to which the user is redirected when interacting with a button or option.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum of 3000 characters.
   *    * For options, it is only supported for options in an overflow menu.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public url(url: string): this {
    return this.set(url, props.url);
  }
}

export abstract class HasValue extends PropSetter {
  /**
   * @description Sets a value to be sent to your app when a user interacts with a button or option.
   *
   * **Slack Validation Rules and Tips:**
   *    * For buttons, maximum of 2000 characters.
   *    * For options, maximum of 75 characters.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public value(value: string): this {
    return this.set(value, props.value);
  }
}
