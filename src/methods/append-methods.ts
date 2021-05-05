/* eslint-disable max-classes-per-file */
/* eslint-disable max-len */

import { PropSetter } from '../lib';
import { Prop } from '../constants';

import type { AttachmentBit } from '../bits/attachment';
import type { OptionBit } from '../bits/option';
import type { OptionGroupBit } from '../bits/option-group';

export abstract class HasAttachments extends PropSetter {
  /**
   * @description Adds attachments to your message.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public attachments(...attachments: Array<AttachmentBit | AttachmentBit[]>): this {
    return this.append(attachments.flat(), Prop.Attachments);
  }
}

export abstract class HasBlocks<Type> extends PropSetter {
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

  public blocks(...blocks: Array<Type | Type[]>): this {
    return this.append(blocks.flat(), Prop.Blocks);
  }
}

export abstract class HasElements<Type> extends PropSetter {
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

  public elements(...elements: Array<Type | Type[]>): this {
    return this.append(elements.flat(), Prop.Elements);
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
    return this.append(fields.flat(), Prop.Fields);
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
    return this.append(filters.flat(), Prop.Filter);
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
    return this.append(channelIds.flat(), Prop.InitialChannels);
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
    return this.append(conversationIds.flat(), Prop.InitialConversations);
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
    return this.append(options.flat(), Prop.InitialOptions);
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
    return this.append(userIds.flat(), Prop.InitialUsers);
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
    return this.append(optionGroups.flat(), Prop.OptionGroups);
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
    return this.append(options.flat(), Prop.Options);
  }
}
