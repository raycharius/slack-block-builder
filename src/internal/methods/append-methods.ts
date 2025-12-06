/* eslint-disable max-classes-per-file */
/* eslint-disable max-len */

import { Builder } from '../lib';
import { Prop } from '../constants';

import type { AttachmentBuilder, OptionBuilder, OptionGroupBuilder } from '../../bits';
import type { Appendable, FilterString } from '../types';

export abstract class Attachments extends Builder {
  /**
   * @description Adds attachments to your message.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public attachments(...attachments: Appendable<AttachmentBuilder>): this {
    return this.append(attachments.flat(), Prop.Attachments);
  }
}

export abstract class Blocks<T> extends Builder {
  /**
   * @description Adds blocks to your view or message.
   *
   * **Slack Validation Rules and Tips:**
   *    * **Required for modals, home tabs, and workflow steps** ⚠
   *    * Maximum of 100 blocks.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public blocks(...blocks: Appendable<T>): this {
    return this.append(blocks.flat(), Prop.Blocks);
  }
}

export abstract class Elements<T> extends Builder {
  /**
   * @description Adds elements to the actions block.
   *
   * **Slack Validation Rules and Tips:**
   *    * **Required** ⚠
   *    * Maximum of 5 elements.
   *    * Supported elements are buttons, select and overflow menus, and date pickers.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public elements(...elements: Appendable<T>): this {
    return this.append(elements.flat(), Prop.Elements);
  }
}

export abstract class Fields extends Builder {
  /**
   * @description Adds text fields to the section block, in two columns, side-by-side.
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

  public fields(...fields: Appendable<string>): this {
    return this.append(fields.flat(), Prop.Fields);
  }
}

export abstract class Filter extends Builder {
  /**
   * @description Defines which conversations should be included in the list.
   *
   * **Slack Validation Rules and Tips:**
   *    * Possible values are *im*, *impm*, *private*, and *public*.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public filter(...filters: Appendable<FilterString>): this {
    return this.append(filters.flat(), Prop.Filter);
  }
}

export abstract class InitialChannels extends Builder {
  /**
   * @description Pre-populates the menu with selected, default channels.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialChannels(...channelIds: Appendable<string>): this {
    return this.append(channelIds.flat(), Prop.InitialChannels);
  }
}

export abstract class InitialConversations extends Builder {
  /**
   * @description Pre-populates the menu with selected, default conversations.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialConversations(...conversationIds: Appendable<string>): this {
    return this.append(conversationIds.flat(), Prop.InitialConversations);
  }
}

export abstract class InitialOptions extends Builder {
  /**
   * @description Pre-populates the menu or checkbox input with selected, default options.
   *
   * **Slack Validation Rules and Tips:**
   *    * Must be exact matches to options in the menu.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialOptions(...options: Appendable<OptionBuilder>): this {
    return this.append(options.flat(), Prop.InitialOptions);
  }
}

export abstract class InitialUsers extends Builder {
  /**
   * @description Pre-populates the menu with selected, default users.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public initialUsers(...userIds: Appendable<string>): this {
    return this.append(userIds.flat(), Prop.InitialUsers);
  }
}

export abstract class OptionGroups extends Builder {
  /**
   * @description Adds organized groups of options to the select or multi-select menu, each with its own label or title.
   *
   * **Slack Validation Rules and Tips:**
   *    * Maximum of 100 options.
   *    * Both options and options groups cannot be defined at the same time for any element.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public optionGroups(...optionGroups: Appendable<OptionGroupBuilder>): this {
    return this.append(optionGroups.flat(), Prop.OptionGroups);
  }
}

export abstract class Options extends Builder {
  /**
   * @description Adds options to the select or multi-select menu.
   *
   * **Slack Validation Rules and Tips:**
   *    * **Required** ⚠
   *    * Maximum of 100 options.
   *    * Both options and options groups cannot be defined at the same time for any element.
   *
   * {@link https://docs.slack.dev/reference/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  public options(...options: Appendable<OptionBuilder>): this {
    return this.append(options.flat(), Prop.Options);
  }
}
