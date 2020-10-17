const { ActionElement } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types, props, enumValues } = require('../utility/constants');

class TextInputDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.elements.input;
    this.action_id = params.actionId;
    this.placeholder = params.placeholder;
    this.initial_value = params.initialValue;
    this.multiline = params.multiline;
    this.min_length = params.minLength;
    this.max_length = params.maxLength;
    this.dispatch_action_config = params.dispatchActionConfig;

    this.pruneAndFreeze();
  }
}

class TextInput extends ActionElement {
  constructor(params = {}) {
    super();

    this.props.placeholder = params.placeholder;
    this.props.actionId = params.actionId;
    this.props.initialValue = params.initialValue;
    this.props.minLength = params.minLength;
    this.props.maxLength = params.maxLength;

    this.finalizeConstruction();
  }

  /**
   * Adds the text in place of the input before selected or
   * interacted with
   *
   * **Slack Validation Rules:**
   *    * Max 150 characters
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#input|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  placeholder(string) {
    return this.set(string, props.placeholder);
  }

  /**
   * Sets the default text entered into the TextInput at load
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#input|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  initialValue(string) {
    return this.set(string, props.initialValue);
  }

  /**
   * Sets the Input to be multiline, as opposed to single line
   *
   * **Slack Validation Rules:**
   *    * Defaults to false
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#input|View in Slack API Documentation}
   *
   * @return {this} The instance on which the method is called
   */

  multiline() {
    return this.set(true, props.multiline);
  }

  /**
   * Sets a minimum character count in order for the user to submit the form
   *
   * **Slack Validation Rules:**
   *    * Maximum 3000 characters
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#input|View in Slack API Documentation}
   *
   * @param {int} int
   * @return {this} The instance on which the method is called
   */

  minLength(int) {
    return this.set(int, props.minLength);
  }

  /**
   * Sets a maximum character count allowed to send the form
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#input|View in Slack API Documentation}
   *
   * @param {int} int
   * @return {this} The instance on which the method is called
   */

  maxLength(int) {
    return this.set(int, props.maxLength);
  }

  /**
   * Configures the text input to send an actions payload when Enter is pressed
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#input|View in Slack API Documentation}
   *
   * @return {this} The instance on which the method is called
   */

  dispatchActionOnEnterPressed() {
    return this.set(enumValues.onEnterPressed, props.onEnterPressed);
  }

  /**
   * Configures the text input to send an actions payload when a character is entered
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#input|View in Slack API Documentation}
   *
   * @return {this} The instance on which the method is called
   */

  dispatchActionOnCharacterEntered() {
    return this.set(enumValues.onCharacterEntered, props.onCharacterEntered);
  }

  /**
   * @private
   */

  build() {
    const augmentedProps = {
      placeholder: BuilderHelper.getPlainTextObject(this.props.placeholder),
      dispatchActionConfig: BuilderHelper.getDispatchActionsConfigurationObject(this.props),
    };

    return this.getResult(TextInputDto, augmentedProps);
  }
}

module.exports = {
  TextInput,
  TextInputDto,
};
