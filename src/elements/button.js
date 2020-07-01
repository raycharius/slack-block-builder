const { ConfirmableElement } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types, enumValues, props } = require('../utility/constants');


class ButtonDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.elements.button;
    this.text = params.text;
    this.action_id = params.actionId;
    this.url = params.url;
    this.value = params.value;
    this.style = params.style;
    this.confirm = params.confirm;

    this.pruneAndFreeze();
  }
}


class Button extends ConfirmableElement {
  constructor(params = {}) {
    super();

    this.props.text = params.text;
    this.props.actionId = params.actionId;
    this.props.url = params.url;
    this.props.value = params.value;

    this.finalizeConstruction();
  }

  /**
   * Sets the display text for the Button
   *
   * **Slack Validation Rules:**
   *    * **Required** ⚠
   *    * Max 75 characters
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#button|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  text(string) {
    return this.set(string, props.text);
  }

  /**
   * Sets the URL to redirect the user to when this Button is clicked
   *
   * **Slack Validation Rules:**
   *    * Max 3000 characters
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#button|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  url(string) {
    return this.set(string, props.url);
  }

  /**
   * Sets the value to be passed to your app when this Button is clicked
   *
   * **Slack Validation Rules:**
   *    * Max 2000 characters
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#button|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  value(string) {
    return this.set(string, props.value);
  }

  /**
   * Sets the style property to 'primary,' making the Button green
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#button|View in Slack API Documentation}
   *
   * @return {this} The instance on which the method is called
   */

  primary() {
    return this.set(enumValues.primary, props.style);
  }

  /**
   * Sets the style property to 'danger,' making the Button red
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#button|View in Slack API Documentation}
   *
   * @return {this} The instance on which the method is called
   */

  danger() {
    return this.set(enumValues.danger, props.style);
  }

  /**
   * @private
   */

  build() {
    const augmentedProps = {
      confirm: BuilderHelper.getBuilderResult(this.props.confirm),
      text: BuilderHelper.getPlainTextObject(this.props.text),
    };

    return this.getResult(ButtonDto, augmentedProps);
  }
}

module.exports = {
  Button,
  ButtonDto,
};
