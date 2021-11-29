/* eslint-disable max-classes-per-file */
/* eslint-disable max-len */

import { Builder } from '../lib';
import { Prop } from '../constants';

import type { SectionElementBuilder, Undefinable } from '../types';
import type { OptionBuilder } from '../../bits';

export abstract class Accessory extends Builder {
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

  public accessory(element: Undefinable<SectionElementBuilder>): this {
    return this.set(element, Prop.Accessory);
  }
}

export abstract class ActionId extends Builder {
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

  public actionId(actionId: Undefinable<string>): this {
    return this.set(actionId, Prop.ActionId);
  }
}

export abstract class AltText extends Builder {
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

  public altText(altText: Undefinable<string>): this {
    return this.set(altText, Prop.AltText);
  }
}

export abstract class BlockId extends Builder {
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

  public blockId(blockId: Undefinable<string>): this {
    return this.set(blockId, Prop.BlockId);
  }
}

export abstract class CallbackId extends Builder {
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

  public callbackId(callbackId: Undefinable<string>): this {
    return this.set(callbackId, Prop.CallbackId);
  }
}

export abstract class Channel extends Builder {
  /**
   * @description Sets the Slack channel ID to which the message will be sent via the API.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public channel(channel: Undefinable<string>): this {
    return this.set(channel, Prop.Channel);
  }
}

export abstract class Close extends Builder {
  /**
   * @description Sets the text displayed on the button that closes the view.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum of 24 characters.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public close(closeButtonText: Undefinable<string>): this {
    return this.set(closeButtonText, Prop.Close);
  }
}

export abstract class Color extends Builder {
  /**
   * @description Sets the color for the blockquote border to the left of the attachment.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public color(color: Undefinable<string>): this {
    return this.set(color, Prop.Color);
  }
}

export abstract class Confirm<T> extends Builder {
  /**
   * @description For confirmation dialogs, sets the text of the button that confirms the action to which the confirmation dialog has been added. For elements, adds a confirmation dialog that is displayed when the user interacts with the element to confirm the selection or action.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public confirm(value: Undefinable<T>): this {
    return this.set(value, Prop.Confirm);
  }
}

export abstract class Deny extends Builder {
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

  public deny(text: Undefinable<string>): this {
    return this.set(text, Prop.Deny);
  }
}

export abstract class Description extends Builder {
  /**
   * @description Sets the descriptive text displayed below the text field of the option.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum of 75 characters.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public description(description: Undefinable<string>): this {
    return this.set(description, Prop.Description);
  }
}

export abstract class Element<T> extends Builder {
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

  public element(element: Undefinable<T>): this {
    return this.set(element, Prop.Element);
  }
}

export abstract class ExternalId extends Builder {
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

  public externalId(externalId: Undefinable<string>): this {
    return this.set(externalId, Prop.ExternalId);
  }
}

export abstract class Fallback extends Builder {
  /**
   * @description Sets the plain text summary of the attachment used in clients that can't display formatted text (eg. IRC, mobile notifications).
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public fallback(text: Undefinable<string>): this {
    return this.set(text, Prop.Fallback);
  }
}

export abstract class Hint extends Builder {
  /**
   * @description Adds a hint below the input block to provide users with more context or instructions for using the input.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum of 2000 characters.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public hint(hint: Undefinable<string>): this {
    return this.set(hint, Prop.Hint);
  }
}

export abstract class ImageUrl extends Builder {
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

  public imageUrl(url: Undefinable<string>): this {
    return this.set(url, Prop.ImageUrl);
  }
}

export abstract class InitialChannel extends Builder {
  /**
   * @description Pre-populates the menu with a selected, default channel.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialChannel(channelId: Undefinable<string>): this {
    return this.set(channelId, Prop.InitialChannel);
  }
}

export abstract class InitialConversation extends Builder {
  /**
   * @description Pre-populates the menu with a selected, default conversation.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialConversation(conversationId: Undefinable<string>): this {
    return this.set(conversationId, Prop.InitialConversation);
  }
}

export abstract class InitialDate extends Builder {
  /**
   * @description Pre-populates the date picker with a selected, default date.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialDate(date: Undefinable<Date>): this {
    return this.set(date, Prop.InitialDate);
  }
}

export abstract class InitialOption extends Builder {
  /**
   * @description Pre-populates the menu or date picker with a selected, default option.
   *
   * **Slack Validation Rules and Tips:**
   *    * Must be an exact match for one of the options in the menu.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialOption(option: Undefinable<OptionBuilder>): this {
    return this.set(option, Prop.InitialOption);
  }
}

export abstract class InitialTime extends Builder {
  /**
   * @description Pre-populates the time picker with a selected, default time.
   *
   * **Slack Validation Rules and Tips:**
   *    * Set in HH:mm format, where HH is 24-hour hour format and mm is minutes with a leading zero.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialTime(time: Undefinable<string>): this {
    return this.set(time, Prop.InitialTime);
  }
}

export abstract class InitialUser extends Builder {
  /**
   * @description Pre-populates the menu with a selected, default user.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialUser(userId: Undefinable<string>): this {
    return this.set(userId, Prop.InitialUser);
  }
}

export abstract class InitialValue extends Builder {
  /**
   * @description Pre-populates the text input with default, editable text.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialValue(value: Undefinable<string>): this {
    return this.set(value, Prop.InitialValue);
  }
}

export abstract class Label extends Builder {
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

  public label(label: Undefinable<string>): this {
    return this.set(label, Prop.Label);
  }
}

export abstract class MaxLength extends Builder {
  /**
   * @description Sets a maximum character count allowed in the given text input.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public maxLength(length: Undefinable<number>): this {
    return this.set(length, Prop.MaxLength);
  }
}

export abstract class MaxSelectedItems extends Builder {
  /**
   * @description Sets a limit to how many items the user can select in the multi-select menu.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public maxSelectedItems(quantity: Undefinable<number>): this {
    return this.set(quantity, Prop.MaxSelectedItems);
  }
}

export abstract class MinQueryLength extends Builder {
  /**
   * @description Sets a minimum number of characters required before Slack queries your app for a list of options.
   *
   * **Slack Validation Rules and Tips:**
   *    * If not set, the request will be sent on every character entered or removed.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public minQueryLength(length: Undefinable<number>): this {
    return this.set(length, Prop.MinQueryLength);
  }
}

export abstract class MinLength extends Builder {
  /**
   * @description Sets a minimum character count required for the given text input before the user can submit the view.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum 3000 characters.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public minLength(length: Undefinable<number>): this {
    return this.set(length, Prop.MinLength);
  }
}

export abstract class Placeholder extends Builder {
  /**
   * @description Defines the text displayed as a placeholder in the empty input element.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum of 150 characters.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public placeholder(placeholder: Undefinable<string>): this {
    return this.set(placeholder, Prop.Placeholder);
  }
}

export abstract class PostAt extends Builder {
  /**
   * @description Sets a time in the future for the message to be sent to the channel or user, as a scheduled message.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public postAt(timestamp: Undefinable<string>): this {
    return this.set(timestamp, Prop.PostAt);
  }
}

export abstract class PrivateMetaData extends Builder {
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

  public privateMetaData(privateMetaData: Undefinable<string>): this {
    return this.set(privateMetaData, Prop.PrivateMetaData);
  }
}

export abstract class Submit extends Builder {
  /**
   * @description Sets the text displayed on the button that submits the view.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum of 24 characters.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public submit(text: Undefinable<string>): this {
    return this.set(text, Prop.Submit);
  }
}

export abstract class Text extends Builder {
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

  public text(text: Undefinable<string>): this {
    return this.set(text, Prop.Text);
  }
}

export abstract class Title extends Builder {
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

  public title(title: Undefinable<string>): this {
    return this.set(title, Prop.Title);
  }
}

export abstract class ThreadTs extends Builder {
  /**
   * @description Instructs the Slack API to send the message to the thread of the message associated with the timestamp.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public threadTs(threadTs: Undefinable<string>): this {
    return this.set(threadTs, Prop.ThreadTs);
  }
}

export abstract class Ts extends Builder {
  /**
   * @description Instructs the Slack API to use the message to replaced an existing message.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public ts(ts: Undefinable<string>): this {
    return this.set(ts, Prop.Ts);
  }
}

export abstract class Url extends Builder {
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

  public url(url: Undefinable<string>): this {
    return this.set(url, Prop.Url);
  }
}

export abstract class Value extends Builder {
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

  public value(value: Undefinable<string>): this {
    return this.set(value, Prop.Value);
  }
}
