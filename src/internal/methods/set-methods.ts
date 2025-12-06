/* eslint-disable max-classes-per-file */
/* eslint-disable max-len */

import { Builder } from '../lib';
import { Prop } from '../constants';

import type { SectionElementBuilder, Settable } from '../types';
import type { OptionBuilder } from '../../bits';

export abstract class AccessibilityLabel extends Builder {
  /**
   * @description A label for longer descriptive text about a button element. This label will be read out by screen readers instead of the button text object.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum of 75 characters.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public accessibilityLabel(label: string): this {
    return this.set(label, Prop.AccessibilityLabel);
  }
}

export abstract class Accessory extends Builder {
  /**
   * @description Adds an element to the section block of your view or message.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum of 1 element.
   *    * Can be any one of the elements.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public accessory(element: Settable<SectionElementBuilder>): this {
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
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public actionId(actionId: Settable<string>): this {
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
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public altText(altText: Settable<string>): this {
    return this.set(altText, Prop.AltText);
  }
}

export abstract class AuthorName extends Builder {
  /**
   * @description This a plain-text representation of the author of a video.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum of 50 characters.
   *
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public authorName(authorName: Settable<string>): this {
    return this.set(authorName, Prop.AuthorName);
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
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public blockId(blockId: Settable<string>): this {
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
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public callbackId(callbackId: Settable<string>): this {
    return this.set(callbackId, Prop.CallbackId);
  }
}

export abstract class Channel extends Builder {
  /**
   * @description Sets the Slack channel ID to which the message will be sent via the API.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public channel(channel: Settable<string>): this {
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
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public close(closeButtonText: Settable<string>): this {
    return this.set(closeButtonText, Prop.Close);
  }
}

export abstract class Color extends Builder {
  /**
   * @description Sets the color for the blockquote border to the left of the attachment.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public color(color: Settable<string>): this {
    return this.set(color, Prop.Color);
  }
}

export abstract class Confirm<T> extends Builder {
  /**
   * @description For confirmation dialogs, sets the text of the button that confirms the action to which the confirmation dialog has been added. For elements, adds a confirmation dialog that is displayed when the user interacts with the element to confirm the selection or action.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public confirm(value: Settable<T>): this {
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
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public deny(text: Settable<string>): this {
    return this.set(text, Prop.Deny);
  }
}

export abstract class Description extends Builder {
  /**
   * @description Sets the descriptive text displayed below the text field of the option or for a video, if creating a Video block.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum of 75 characters.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public description(description: Settable<string>): this {
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
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public element(element: Settable<T>): this {
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
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public externalId(externalId: Settable<string>): this {
    return this.set(externalId, Prop.ExternalId);
  }
}

export abstract class Fallback extends Builder {
  /**
   * @description Sets the plain text summary of the attachment used in clients that can't display formatted text (eg. IRC, mobile notifications).
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public fallback(text: Settable<string>): this {
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
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public hint(hint: Settable<string>): this {
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
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public imageUrl(url: Settable<string>): this {
    return this.set(url, Prop.ImageUrl);
  }
}

export abstract class InitialChannel extends Builder {
  /**
   * @description Pre-populates the menu with a selected, default channel.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialChannel(channelId: Settable<string>): this {
    return this.set(channelId, Prop.InitialChannel);
  }
}

export abstract class InitialConversation extends Builder {
  /**
   * @description Pre-populates the menu with a selected, default conversation.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialConversation(conversationId: Settable<string>): this {
    return this.set(conversationId, Prop.InitialConversation);
  }
}

export abstract class InitialDate extends Builder {
  /**
   * @description Pre-populates the date picker with a selected, default date.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialDate(date: Settable<Date>): this {
    return this.set(date, Prop.InitialDate);
  }
}

export abstract class InitialDateTime extends Builder {
  /**
   * @description Pre-populates the date time picker with a selected, default date and time.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialDateTime(date: Settable<Date>): this {
    return this.set(date, Prop.InitialDateTime);
  }
}

export abstract class InitialOption extends Builder {
  /**
   * @description Pre-populates the menu or date picker with a selected, default option.
   *
   * **Slack Validation Rules and Tips:**
   *    * Must be an exact match for one of the options in the menu.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialOption(option: Settable<OptionBuilder>): this {
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
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialTime(time: Settable<string>): this {
    return this.set(time, Prop.InitialTime);
  }
}

export abstract class InitialUser extends Builder {
  /**
   * @description Pre-populates the menu with a selected, default user.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialUser(userId: Settable<string>): this {
    return this.set(userId, Prop.InitialUser);
  }
}

export abstract class InitialValue<T extends string | number> extends Builder {
  /**
   * @description Pre-populates the input with a default value.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialValue(value: Settable<T>): this {
    return this.set(value, Prop.InitialValue);
  }
}

export abstract class IsDecimalAllowed extends Builder {
  /**
   * @description Dicates whether a decimal is allowed for the value entered into the number input.
   *
   * **Slack Validation Rules and Tips:**
   *    * **Required** ⚠
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public isDecimalAllowed(value: Settable<boolean>): this {
    return this.set(value, Prop.IsDecimalAllowed);
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
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public label(label: Settable<string>): this {
    return this.set(label, Prop.Label);
  }
}

export abstract class MaxLength extends Builder {
  /**
   * @description Sets a maximum character count allowed in the given text input.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public maxLength(length: Settable<number>): this {
    return this.set(length, Prop.MaxLength);
  }
}

export abstract class MaxSelectedItems extends Builder {
  /**
   * @description Sets a limit to how many items the user can select in the multi-select menu.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public maxSelectedItems(quantity: Settable<number>): this {
    return this.set(quantity, Prop.MaxSelectedItems);
  }
}

export abstract class MaxValue extends Builder {
  /**
   * @description Sets a maximum value for the number input.
   *
   * **Slack Validation Rules and Tips:**
   *    * Cannot be less than the minimum value.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public maxValue(value: Settable<number>): this {
    return this.set(value, Prop.MaxValue);
  }
}

export abstract class MinQueryLength extends Builder {
  /**
   * @description Sets a minimum number of characters required before Slack queries your app for a list of options.
   *
   * **Slack Validation Rules and Tips:**
   *    * If not set, the request will be sent on every character entered or removed.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public minQueryLength(length: Settable<number>): this {
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
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public minLength(length: Settable<number>): this {
    return this.set(length, Prop.MinLength);
  }
}

export abstract class MinValue extends Builder {
  /**
   * @description Sets a minimum value for the number input.
   *
   * **Slack Validation Rules and Tips:**
   *    * Cannot be less than the maximum value.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public minValue(value: Settable<number>): this {
    return this.set(value, Prop.MinValue);
  }
}

export abstract class Placeholder extends Builder {
  /**
   * @description Defines the text displayed as a placeholder in the empty input element.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum of 150 characters.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public placeholder(placeholder: Settable<string>): this {
    return this.set(placeholder, Prop.Placeholder);
  }
}

export abstract class PostAt extends Builder {
  /**
   * @description Sets a time in the future for the message to be sent to the channel or user, as a scheduled message.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public postAt(timestamp: Settable<string>): this {
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
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public privateMetaData(privateMetaData: Settable<string>): this {
    return this.set(privateMetaData, Prop.PrivateMetaData);
  }
}

export abstract class ProviderIconUrl extends Builder {
  /**
   * @description Icon for the video provider - ex. YouTube or Vimeo icon.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public providerIconUrl(providerIconUrl: Settable<string>): this {
    return this.set(providerIconUrl, Prop.ProviderIconUrl);
  }
}

export abstract class ProviderName extends Builder {
  /**
   * @description The originating application or domain of the video ex. YouTube or Vimeo.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public providerName(providerName: Settable<string>): this {
    return this.set(providerName, Prop.ProviderName);
  }
}

export abstract class Submit extends Builder {
  /**
   * @description Sets the text displayed on the button that submits the view.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum of 24 characters.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public submit(text: Settable<string>): this {
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
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public text(text: Settable<string>): this {
    return this.set(text, Prop.Text);
  }
}

export abstract class ThreadTs extends Builder {
  /**
   * @description Instructs the Slack API to send the message to the thread of the message associated with the timestamp.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public threadTs(threadTs: Settable<string>): this {
    return this.set(threadTs, Prop.ThreadTs);
  }
}

export abstract class ThumbnailUrl extends Builder {
  /**
   * @description A URL that loads the thumbnail image of the video.
   *
   * **Slack Validation Rules and Tips:**
   *    * **Required property for Video blocks** ⚠
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public thumbnailUrl(thumbnailUrl: Settable<string>): this {
    return this.set(thumbnailUrl, Prop.ThumbnailUrl);
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
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public title(title: Settable<string>): this {
    return this.set(title, Prop.Title);
  }
}

export abstract class TitleUrl extends Builder {
  /**
   * @description A hyperlink for the video's title text.
   *
   * **Slack Validation Rules and Tips:**
   *    * Must correspond to the non-embeddable URL for the video.
   *    * Must go to an HTTPS URL.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public titleUrl(titleUrl: Settable<string>): this {
    return this.set(titleUrl, Prop.TitleUrl);
  }
}

export abstract class Ts extends Builder {
  /**
   * @description Instructs the Slack API to use the message to replaced an existing message.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public ts(ts: Settable<string>): this {
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
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public url(url: Settable<string>): this {
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
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public value(value: Settable<string>): this {
    return this.set(value, Prop.Value);
  }
}

export abstract class VideoUrl extends Builder {
  /**
   * @description The URL of the video to embed in the Video block.
   *
   * **Slack Validation Rules and Tips:**
   *    * **Required property for Video blocks** ⚠
   *    * Must match any existing unfurl domains within the app.
   *    * Must point to an HTTPS URL.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public videoUrl(videoUrl: Settable<string>): this {
    return this.set(videoUrl, Prop.VideoUrl);
  }
}

export abstract class MaxFiles extends Builder {
  /**
   * @description Maximum number of files that can be uploaded for this file_input element. Minimum of 1, maximum of 10. Defaults to 10 if not specified.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public maxFiles(maxFiles:Settable<number> = 10): this {
    return this.set(maxFiles, Prop.MaxFiles);
  }
}

export abstract class Filetypes extends Builder {
  /**
   * @description An array of valid file extensions that will be accepted for this element. All file extensions will be accepted if filetypes is not specified.
   *
   * **Slack Validation Rules and Tips:**
   *    * **Required if the text property is undefined** ⚠
   *    * Maximum of 10 items.
   *    * Maximum of 2000 characters for each field.
   *    * Markdown supported.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public filetypes(filetypes:Settable<string[]> = []): this {
    return this.set(filetypes.flat(), Prop.Filetypes);
  }
}
