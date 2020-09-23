const { Bit } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { props, enumValues } = require('../utility/constants');

class ConfirmationDialogDto extends SlackDto {
  constructor(params) {
    super();

    this.title = params.title;
    this.text = params.text;
    this.confirm = params.confirm;
    this.deny = params.deny;
    this.style = params.style;

    this.pruneAndFreeze();
  }
}

class ConfirmationDialog extends Bit {
  constructor(params = {}) {
    super();

    this.props.title = params.title;
    this.props.text = params.text;
    this.props.confirm = params.confirm;
    this.props.deny = params.deny;

    this.finalizeConstruction();
  }

  /**
   * Sets the title displayed in the confirmation dialog
   *
   * **Slack Validation Rules:**
   *    * **Required** ⚠
   *    * Max 100 characters
   *
   * {@link https://api.slack.com/reference/block-kit/composition-objects#confirm|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  title(string) {
    return this.set(string, props.title);
  }

  /**
   * Sets the textual content of the confirmation dialog
   *
   * **Slack Validation Rules:**
   *    * **Required** ⚠
   *    * Max 300 characters
   *
   * {@link https://api.slack.com/reference/block-kit/composition-objects#confirm|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  text(string) {
    return this.set(string, props.text);
  }

  /**
   * Sets the copy for the button that confirms the action.
   *
   * **Slack Validation Rules:**
   *    * **Required** ⚠
   *    * Max 30 characters
   *
   * {@link https://api.slack.com/reference/block-kit/composition-objects#confirm|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  confirm(string) {
    return this.set(string, props.confirm);
  }

  /**
   * Sets the copy for the button that cancels the action.
   *
   * **Slack Validation Rules:**
   *    * **Required** ⚠
   *    * Max 30 characters
   *
   * {@link https://api.slack.com/reference/block-kit/composition-objects#confirm|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  deny(string) {
    return this.set(string, props.deny);
  }

  /**
   * Sets the 'style' parameter to 'primary', making the
   *
   * {@link https://api.slack.com/reference/block-kit/composition-objects#confirm|View in Slack API Documentation}
   *
   * @return {this} The instance on which the method is called
   */

  primary() {
    return this.set(enumValues.primary, props.style);
  }

  /**
   * Sets 'style' parameter to 'danger'
   *
   * {@link https://api.slack.com/reference/block-kit/composition-objects#confirm|View in Slack API Documentation}
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
      text: BuilderHelper.getMarkdownObject(this.props.text),
      title: BuilderHelper.getPlainTextObject(this.props.title),
      confirm: BuilderHelper.getPlainTextObject(this.props.confirm),
      deny: BuilderHelper.getPlainTextObject(this.props.deny),
    };

    return this.getResult(ConfirmationDialogDto, augmentedProps);
  }
}

module.exports = {
  ConfirmationDialogDto,
  ConfirmationDialog,
};
