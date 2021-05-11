/* eslint-disable max-classes-per-file */
/* eslint-disable max-len */

import { Builder } from '../lib';
import { Prop } from '../constants';

import type { AttachmentBuilder } from '../bits/attachment';
import type { OptionBuilder } from '../bits/option';
import type { OptionGroupBuilder } from '../bits/option-group';
import type { SingleOrArray } from '../types';

export abstract class HasAttachments extends Builder {
  /**
   * @description Adds attachments to your message.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  attachments(attachment: SingleOrArray<AttachmentBuilder>, ...attachments: Array<SingleOrArray<AttachmentBuilder>>): this;

  public attachments(...attachments: Array<SingleOrArray<AttachmentBuilder>>): this {
    return this.append(attachments.flat(), Prop.Attachments);
  }
}

export abstract class HasBlocks<Type> extends Builder {
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

  blocks(block: SingleOrArray<Type>, ...blocks: Array<SingleOrArray<Type>>): this;

  public blocks(...blocks: Array<SingleOrArray<Type>>): this {
    return this.append(blocks.flat(), Prop.Blocks);
  }
}

export abstract class HasElements<Type> extends Builder {
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

  elements(element: SingleOrArray<Type>, ...elements: Array<SingleOrArray<Type>>): this;

  public elements(...elements: Array<SingleOrArray<Type>>): this {
    return this.append(elements.flat(), Prop.Elements);
  }
}

export abstract class HasFields extends Builder {
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

  fields(field: SingleOrArray<string>, ...fields: Array<SingleOrArray<string>>): this;

  public fields(...fields: Array<SingleOrArray<string>>): this {
    return this.append(fields.flat(), Prop.Fields);
  }
}

export abstract class HasFilter extends Builder {
  /**
   * @description Defines which conversations should be included in the list.
   *
   * **Slack Validation Rules and Tips:**
   *    * Possible values are *im*, *impm*, *private*, and *public*.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  filter(filter: SingleOrArray<string>, ...filters: Array<SingleOrArray<string>>): this;

  public filter(...filters: Array<SingleOrArray<string>>): this {
    return this.append(filters.flat(), Prop.Filter);
  }
}

export abstract class HasInitialChannels extends Builder {
  /**
   * @description Pre-populates the menu with selected, default channels.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  initialChannels(channelId: SingleOrArray<string>, ...channelIds: Array<SingleOrArray<string>>): this;

  public initialChannels(...channelIds: Array<SingleOrArray<string>>): this {
    return this.append(channelIds.flat(), Prop.InitialChannels);
  }
}

export abstract class HasInitialConversations extends Builder {
  /**
   * @description Pre-populates the menu with selected, default conversations.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  initialConversations(conversationId: SingleOrArray<string>, ...conversationIds: Array<SingleOrArray<string>>): this;

  public initialConversations(...conversationIds: Array<SingleOrArray<string>>): this {
    return this.append(conversationIds.flat(), Prop.InitialConversations);
  }
}

export abstract class HasInitialOptions extends Builder {
  /**
   * @description Pre-populates the menu or checkbox input with selected, default options.
   *
   * **Slack Validation Rules and Tips:**
   *    * Must be exact matches to options in the menu.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  initialOptions(option: SingleOrArray<OptionBuilder>, ...options: Array<SingleOrArray<OptionBuilder>>): this;

  public initialOptions(...options: Array<SingleOrArray<OptionBuilder>>): this {
    return this.append(options.flat(), Prop.InitialOptions);
  }
}

export abstract class HasInitialUsers extends Builder {
  /**
   * @description Pre-populates the menu with selected, default users.
   *
   * {@link https://api.slack.com/block-kit|Open Official Slack Block Kit Documentation}
   * {@link https://www.blockbuilder.dev|Open Block Builder Documentation}
   */

  initialUsers(userId: SingleOrArray<string>, ...userIds: Array<SingleOrArray<string>>): this;

  public initialUsers(...userIds: Array<SingleOrArray<string>>): this {
    return this.append(userIds.flat(), Prop.InitialUsers);
  }
}

export abstract class HasOptionGroups extends Builder {
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

  optionGroups(optionGroup: SingleOrArray<OptionGroupBuilder>, ...optionGroups: Array<SingleOrArray<OptionGroupBuilder>>): this;

  public optionGroups(...optionGroups: Array<SingleOrArray<OptionGroupBuilder>>): this {
    return this.append(optionGroups.flat(), Prop.OptionGroups);
  }
}

export abstract class HasOptions extends Builder {
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

  options(option: SingleOrArray<OptionBuilder>, ...options: Array<SingleOrArray<OptionBuilder>>): this;

  public options(...options: Array<SingleOrArray<OptionBuilder>>): this {
    return this.append(options.flat(), Prop.Options);
  }
}
