const { MultiSelectElement } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types, props } = require('../utility/constants');

class ConversationMultiSelectDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.elements.multiselect.conversations;
    this.placeholder = params.placeholder;
    this.action_id = params.actionId;
    this.initial_conversations = params.initialConversations;
    this.default_to_current_conversation = params.defaultToCurrentConversation;
    this.confirm = params.confirm;
    this.max_selected_items = params.maxSelectedItems;
    this.filter = params.filter;

    this.pruneAndFreeze();
  }
}

class ConversationMultiSelect extends MultiSelectElement {
  constructor(params = {}) {
    super();

    this.props.placeholder = params.placeholder;
    this.props.actionId = params.actionId;
    this.props.maxSelectedItems = params.maxSelectedItems;

    this.finalizeConstruction();
  }

  /**
   * Sets the default selected items in the menu
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#conversation_multi_select|View in Slack API Documentation}
   *
   * @param {...string|Array<string>} strings Accepts multiple arguments or Array
   * @return {this} The instance on which the method is called
   */

  initialConversations(...strings) {
    return this.append(strings.flat(), props.initialConversations);
  }

  /**
   * Sets default selected conversation to the one currently open for the user
   *
   * **Slack Validation Rules:**
   *    * If initial conversations provided, this option is ignored
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#conversation_multi_select|View in Slack API Documentation}
   *
   * @return {this} The instance on which the method is called
   */

  defaultToCurrentConversation() {
    return this.set(true, props.defaultToCurrentConversation);
  }

  /**
   * Defines which conversations should be included in the list. Possible
   * enumValues are *im*, *impm*, *private*, and *public*
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#conversation_multi_select|View in Slack API Documentation}
   *
   * @param {...string|Array<string>} filters Accepts multiple arguments or Array
   * @return {this} The instance on which the method is called
   */

  filter(...filters) {
    return this.append(filters.flat(), props.filter);
  }

  /**
   * Excludes external shared conversations from the list
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#conversation_multi_select|View in Slack API Documentation}
   *
   * @return {this} The instance on which the method is called
   */

  excludeExternalSharedChannels() {
    return this.set(true, props.excludeExternalSharedChannels);
  }

  /**
   * Excludes conversations with bot users from the list
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#conversation_multi_select|View in Slack API Documentation}
   *
   * @return {this} The instance on which the method is called
   */

  excludeBotUsers() {
    return this.set(true, props.excludeBotUsers);
  }

  /**
   * @private
   */

  build() {
    const augmentedProps = {
      placeholder: BuilderHelper.getPlainTextObject(this.props.placeholder),
      confirm: BuilderHelper.getBuilderResult(this.props.confirm),
      filter: BuilderHelper.getFilter(this.props),
    };

    return this.getResult(ConversationMultiSelectDto, augmentedProps);
  }
}

module.exports = {
  ConversationMultiSelect,
  ConversationMultiSelectDto,
};
