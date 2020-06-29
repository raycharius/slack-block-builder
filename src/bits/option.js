const { Bit } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { props } = require('../utility/constants');

class OptionDto extends SlackDto {
  constructor(params) {
    super();

    this.text = params.text;
    this.value = params.value;
    this.description = params.description;
    this.url = params.url;

    this.pruneAndFreeze();
  }
}

class Option extends Bit {
  constructor(params = {}) {
    super();

    this.props.text = params.text;
    this.props.value = params.value;
    this.props.description = params.description;
    this.props.url = params.url;

    this.finalizeConstruction();
  }

  /**
   * Sets the text displayed in the menu for the current Option
   *
   *    * **Required** ⚠
   *    * Max 75 characters.
   *
   * {@link https://api.slack.com/reference/block-kit/composition-objects#option|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  text(string) {
    return this.set(string, props.text);
  }

  /**
   * Sets the value passed to your app when this Option is clicked or submitted
   *
   *    * **Required** ⚠
   *    * Max 75 characters
   *
   * {@link https://api.slack.com/reference/block-kit/composition-objects#option|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  value(string) {
    return this.set(string, props.value);
  }

  /**
   * Sets a description shown next to the Option in a RadioButton Element
   *
   * **Slack Validation Rules:**
   *    * Max 3000 characters
   *    * Only available for RadioButtons ⚠
   *
   * {@link https://api.slack.com/reference/block-kit/composition-objects#option|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  description(string) {
    return this.set(string, props.description);
  }

  /**
   * Sets the URL to redirect the user to when this Option is clicked (in an OverflowMenu)
   *
   * **Slack Validation Rules:**
   *    * Max 3000 characters
   *    * Only available for Options in an OverflowMenu ⚠
   *
   * {@link https://api.slack.com/reference/block-kit/composition-objects#option|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  url(string) {
    return this.set(string, props.url);
  }

  /**
   * @private
   */

  build({ isMarkdown } = { isMarkdown: false }) {
    const augmentedProps = {
      text: isMarkdown
        ? BuilderHelper.getMarkdownObject(this.props.text)
        : BuilderHelper.getPlainTextObject(this.props.text),
      description: isMarkdown
        ? BuilderHelper.getMarkdownObject(this.props.description)
        : BuilderHelper.getPlainTextObject(this.props.description),
    };

    return this.getResult(OptionDto, augmentedProps);
  }
}

module.exports = {
  Option,
  OptionDto,
};
