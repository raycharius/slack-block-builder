/* eslint-disable max-len */

import { AttachmentBuilder, AttachmentParams } from './attachment';
import { ConfirmationDialogBuilder, ConfirmationDialogParams } from './confirmation-dialog';
import { OptionBuilder, OptionParams } from './option';
import { OptionGroupBuilder, OptionGroupParams } from './option-group';
import { RichTextSectionBuilder, RichTextSectionParams } from './rich-text-section';
import { RichTextListBuilder, RichTextListParams } from './rich-text-list';
import { RichTextQuoteBuilder, RichTextQuoteParams } from './rich-text-quote';
import { RichTextPreformattedBuilder, RichTextPreformattedParams } from './rich-text-preformatted';
import { RichTextTextBuilder, RichTextTextParams } from './rich-text-text';
import { RichTextEmojiBuilder, RichTextEmojiParams } from './rich-text-emoji';
import { RichTextLinkBuilder, RichTextLinkParams } from './rich-text-link';
import { RichTextUserBuilder, RichTextUserParams } from './rich-text-user';
import { RichTextChannelBuilder, RichTextChannelParams } from './rich-text-channel';
import { RichTextUsergroupBuilder, RichTextUsergroupParams } from './rich-text-usergroup';
import { RichTextBroadcastBuilder, RichTextBroadcastParams } from './rich-text-broadcast';
import { RichTextDateBuilder, RichTextDateParams } from './rich-text-date';
import { RichTextColorBuilder, RichTextColorParams } from './rich-text-color';
import { RichTextTeamBuilder, RichTextTeamParams } from './rich-text-team';

export type {
  AttachmentBuilder,
  AttachmentParams,
  ConfirmationDialogBuilder,
  ConfirmationDialogParams,
  OptionBuilder,
  OptionParams,
  OptionGroupBuilder,
  OptionGroupParams,
  RichTextSectionBuilder,
  RichTextSectionParams,
  RichTextListBuilder,
  RichTextListParams,
  RichTextQuoteBuilder,
  RichTextQuoteParams,
  RichTextPreformattedBuilder,
  RichTextPreformattedParams,
  RichTextTextBuilder,
  RichTextTextParams,
  RichTextEmojiBuilder,
  RichTextEmojiParams,
  RichTextLinkBuilder,
  RichTextLinkParams,
  RichTextUserBuilder,
  RichTextUserParams,
  RichTextChannelBuilder,
  RichTextChannelParams,
  RichTextUsergroupBuilder,
  RichTextUsergroupParams,
  RichTextBroadcastBuilder,
  RichTextBroadcastParams,
  RichTextDateBuilder,
  RichTextDateParams,
  RichTextColorBuilder,
  RichTextColorParams,
  RichTextTeamBuilder,
  RichTextTeamParams,
};

/**
 * Functions here do not use arrow functions stored in variables for IDE color compatibility.
 */

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.color] Sets the color of the block quote border.
 *
 * {@link https://docs.slack.dev/reference/messaging/attachments|View in Slack API Documentation}
 */

export function Attachment(params?: AttachmentParams): AttachmentBuilder {
  return new AttachmentBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.title] Sets the title displayed in the confirmation dialog.
 * @param {string} [params.text] Sets the textual content of the confirmation dialog.
 * @param {string} [params.confirm] Sets the text for the button that confirms the action.
 * @param {string} [params.deny] Sets the text for the button that cancels the action.
 *
 * {@link https://docs.slack.dev/reference/block-kit/composition-objects/confirmation-dialog-object|View in Slack API Documentation}
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
 * {@link https://docs.slack.dev/reference/block-kit/composition-objects/option-object|View in Slack API Documentation}
 */

export function Option(params?: OptionParams): OptionBuilder {
  return new OptionBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.label] Sets the label shown above the group of option.
 *
 * {@link https://docs.slack.dev/reference/block-kit/composition-objects/option-group-object|View in Slack API Documentation}
 */

export function OptionGroup(params?: OptionGroupParams): OptionGroupBuilder {
  return new OptionGroupBuilder(params);
}

/**
 * @description Creates a rich text section element.
 * {@link https://docs.slack.dev/reference/block-kit/blocks/rich-text-block|View in Slack API Documentation}
 */
export function RichTextSection(params?: RichTextSectionParams): RichTextSectionBuilder {
  return new RichTextSectionBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.style] The list style - 'bullet' or 'ordered'.
 * @param {number} [params.indent] The indentation level (0-8).
 * @param {number} [params.border] Whether to show a border (0 or 1).
 *
 * {@link https://docs.slack.dev/reference/block-kit/blocks/rich-text-block|View in Slack API Documentation}
 */
export function RichTextList(params?: RichTextListParams): RichTextListBuilder {
  return new RichTextListBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {number} [params.border] Whether to show a border (0 or 1).
 *
 * {@link https://docs.slack.dev/reference/block-kit/blocks/rich-text-block|View in Slack API Documentation}
 */
export function RichTextQuote(params?: RichTextQuoteParams): RichTextQuoteBuilder {
  return new RichTextQuoteBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {number} [params.border] Whether to show a border (0 or 1).
 *
 * {@link https://docs.slack.dev/reference/block-kit/blocks/rich-text-block|View in Slack API Documentation}
 */
export function RichTextPreformatted(params?: RichTextPreformattedParams): RichTextPreformattedBuilder {
  return new RichTextPreformattedBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.text] The text content.
 *
 * {@link https://docs.slack.dev/reference/block-kit/blocks/rich-text-block|View in Slack API Documentation}
 */
export function RichTextText(params?: RichTextTextParams): RichTextTextBuilder {
  return new RichTextTextBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.name] The emoji name without colons.
 * @param {string} [params.unicode] The unicode representation.
 * @param {string} [params.url] URL for custom emoji.
 *
 * {@link https://docs.slack.dev/reference/block-kit/blocks/rich-text-block|View in Slack API Documentation}
 */
export function RichTextEmoji(params?: RichTextEmojiParams): RichTextEmojiBuilder {
  return new RichTextEmojiBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.url] The URL to link to.
 * @param {string} [params.text] The link text.
 * @param {boolean} [params.unsafe] Whether the link is unsafe.
 *
 * {@link https://docs.slack.dev/reference/block-kit/blocks/rich-text-block|View in Slack API Documentation}
 */
export function RichTextLink(params?: RichTextLinkParams): RichTextLinkBuilder {
  return new RichTextLinkBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.userId] The user ID to mention.
 *
 * {@link https://docs.slack.dev/reference/block-kit/blocks/rich-text-block|View in Slack API Documentation}
 */
export function RichTextUser(params?: RichTextUserParams): RichTextUserBuilder {
  return new RichTextUserBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.channelId] The channel ID to mention.
 *
 * {@link https://docs.slack.dev/reference/block-kit/blocks/rich-text-block|View in Slack API Documentation}
 */
export function RichTextChannel(params?: RichTextChannelParams): RichTextChannelBuilder {
  return new RichTextChannelBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.usergroupId] The usergroup ID to mention.
 *
 * {@link https://docs.slack.dev/reference/block-kit/blocks/rich-text-block|View in Slack API Documentation}
 */
export function RichTextUsergroup(params?: RichTextUsergroupParams): RichTextUsergroupBuilder {
  return new RichTextUsergroupBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.range] The broadcast range - 'here', 'channel', or 'everyone'.
 *
 * {@link https://docs.slack.dev/reference/block-kit/blocks/rich-text-block|View in Slack API Documentation}
 */
export function RichTextBroadcast(params?: RichTextBroadcastParams): RichTextBroadcastBuilder {
  return new RichTextBroadcastBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {number} [params.timestamp] Unix timestamp in seconds.
 * @param {string} [params.format] The date format template.
 * @param {string} [params.url] Optional URL to link the date.
 * @param {string} [params.fallback] Fallback text if date can't be displayed.
 *
 * {@link https://docs.slack.dev/reference/block-kit/blocks/rich-text-block|View in Slack API Documentation}
 */
export function RichTextDate(params?: RichTextDateParams): RichTextDateBuilder {
  return new RichTextDateBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.value] The hex color value.
 *
 * {@link https://docs.slack.dev/reference/block-kit/blocks/rich-text-block|View in Slack API Documentation}
 */
export function RichTextColor(params?: RichTextColorParams): RichTextColorBuilder {
  return new RichTextColorBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.teamId] The team/workspace ID to mention.
 *
 * {@link https://docs.slack.dev/reference/block-kit/blocks/rich-text-block|View in Slack API Documentation}
 */
export function RichTextTeam(params?: RichTextTeamParams): RichTextTeamBuilder {
  return new RichTextTeamBuilder(params);
}

const bits = {
  Attachment,
  ConfirmationDialog,
  Option,
  OptionGroup,
  RichTextSection,
  RichTextList,
  RichTextQuote,
  RichTextPreformatted,
  RichTextText,
  RichTextEmoji,
  RichTextLink,
  RichTextUser,
  RichTextChannel,
  RichTextUsergroup,
  RichTextBroadcast,
  RichTextDate,
  RichTextColor,
  RichTextTeam,
};

// Strange export. I know. For IDE highlighting purposes.

export { bits as Bits };
