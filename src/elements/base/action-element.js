const Element = require('./element');
const { props } = require('../../utility/constants');

/**
 * @class Make new Button
 * @abstract
 * @extends Element
 */

class ActionElement extends Element {

  /**
   * Sets a string to be an identifier for the source of
   * an action in interaction payloads
   *
   * **Slack Validation Rules:**
   *    * **Required** ⚠
   *    * Must be unique to view
   *    * Max 255 characters
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  actionId(string) {
    return this.set(string, props.actionId);
  }
}

module.exports = ActionElement;
