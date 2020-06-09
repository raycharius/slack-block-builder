const { SelectElement } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types, props } = require('../utility/constants');

class ConversationSelectDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.elements.select.conversations;
    this.placeholder = params.placeholder;
    this.action_id = params.actionId;
    this.initial_conversation = params.initialConversation;
    this.default_to_current_conversation = params.defaultToCurrentConversation;
    this.confirm = params.confirm;
    this.response_url_enabled = params.responseUrlEnabled;
    this.filter = params.filter;

    this.pruneAndFreeze();
  }
}

class ConversationSelect extends SelectElement {
  constructor(params = {}) {
    super();

    this.props.placeholder = params.placeholder;
    this.props.actionId = params.actionId;
    this.props.initialConversation = params.initialConversation;

    this.finalizeConstruction();
  }

  /**
   * Sets the select menu to have an initial value
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#conversation_select|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  initialConversation(string) {
    return this.set(string, props.initialConversation);
  }

  /**
   * Sets default selected conversation to the one currently open for the user
   *
   * **Slack Validation Rules:**
   *    * If initial conversations provided, this option is ignored
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#conversation_select|View in Slack API Documentation}
   *
   * @return {this} The instance on which the method is called
   */

  defaultToCurrentConversation() {
    return this.set(true, props.defaultToCurrentConversation);
  }

  /**
   * Sets option to true, allowing a response URL to be provided at submission
   *
   * **Slack Validation Rules:**
   *    * Only available in modals with Inputs ⚠
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#conversation_select|View in Slack API Documentation}
   *
   * @return {this} The instance on which the method is called
   */

  responseUrlEnabled() {
    return this.set(true, props.responseUrlEnabled);
  }

  /**
   * Defines which conversations should be included in the list. Possible
   * enumValues are *im*, *impm*, *private*, and *public*
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#conversation_select|View in Slack API Documentation}
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
   * {@link https://api.slack.com/reference/block-kit/block-elements#conversation_select|View in Slack API Documentation}
   *
   * @return {this} The instance on which the method is called
   */

  excludeExternalSharedChannels() {
    return this.set(true, props.excludeExternalSharedChannels);
  }

  /**
   * Excludes conversations with bot users from the list
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#conversation_select|View in Slack API Documentation}
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

    return this.getResult(ConversationSelectDto, augmentedProps);
  }
}

module.exports = {
  ConversationSelect,
  ConversationSelectDto,
};
