const ConfirmableElement = require('./confirmable-element');
const { props } = require('../../utility/constants');

class SelectElement extends ConfirmableElement {
  /**
   * Adds the text in place of the input before selected or
   * interacted with
   *
   * **Slack Validation Rules:**
   *    * **Required** ⚠
   *    * Max 150 characters
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#select|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  placeholder(string) {
    return this.set(string, props.placeholder);
  }
}

module.exports = SelectElement;
