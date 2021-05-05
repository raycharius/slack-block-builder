/* eslint-disable max-classes-per-file */
/* eslint-disable max-len */

import { PropSetter } from '../lib';
import { Prop } from '../constants';

import type { OptionBit } from '../bits/option';

export abstract class HasAccessory<Type> extends PropSetter {
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

  public accessory(element: Type): this {
    return this.set(element, Prop.Accessory);
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
    return this.set(actionId, Prop.ActionId);
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
    return this.set(altText, Prop.AltText);
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
    return this.set(blockId, Prop.BlockId);
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
    return this.set(callbackId, Prop.CallbackId);
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
    return this.set(channel, Prop.Channel);
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
    return this.set(closeButtonText, Prop.Close);
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
    return this.set(color, Prop.Color);
  }
}

export abstract class HasConfirm<Type> extends PropSetter {
  /**
   * @description For confirmation dialogs, sets the text of the button that confirms the action to which the confirmation dialog has been added. For elements, adds a confirmation dialog that is displayed when the user interacts with the element to confirm the selection or action.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public confirm(value: Type): this {
    return this.set(value, Prop.Confirm);
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
    return this.set(text, Prop.Deny);
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
    return this.set(description, Prop.Description);
  }
}

export abstract class HasElement<Type> extends PropSetter {
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

  public element(element: Type): this {
    return this.set(element, Prop.Element);
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
    return this.set(externalId, Prop.ExternalId);
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
    return this.set(text, Prop.Fallback);
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
    return this.set(hint, Prop.Hint);
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
    return this.set(url, Prop.ImageUrl);
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
    return this.set(channelId, Prop.InitialChannel);
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
    return this.set(conversationId, Prop.InitialConversation);
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
    return this.set(date, Prop.InitialDate);
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
    return this.set(option, Prop.InitialOption);
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
    return this.set(time, Prop.InitialTime);
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
    return this.set(userId, Prop.InitialUser);
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
    return this.set(value, Prop.InitialValue);
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
    return this.set(label, Prop.Label);
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
    return this.set(length, Prop.MaxLength);
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
    return this.set(quantity, Prop.MaxSelectedItems);
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
    return this.set(length, Prop.MinQueryLength);
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
    return this.set(length, Prop.MinLength);
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
    return this.set(placeholder, Prop.Placeholder);
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
    return this.set(timestamp, Prop.PostAt);
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
    return this.set(privateMetaData, Prop.PrivateMetaData);
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
    return this.set(text, Prop.Submit);
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
    return this.set(text, Prop.Text);
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
    return this.set(title, Prop.Title);
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
    return this.set(threadTs, Prop.ThreadTs);
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
    return this.set(ts, Prop.Ts);
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
    return this.set(url, Prop.Url);
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
    return this.set(value, Prop.Value);
  }
}
