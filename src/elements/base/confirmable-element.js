const ActionElement = require('./action-element');
const { props } = require('../../utility/constants');

class ConfirmableElement extends ActionElement {
  /**
   * Adds a ConfirmationDialog to be shown upon interacting with
   * the current element or submitting the view
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements|View in Slack API Documentation}
   *
   * @param {ConfirmationDialog} obj
   * @return {this} The instance on which the method is called
   */

  confirm(obj) {
    return this.set(obj, props.confirm);
  }
}

module.exports = ConfirmableElement;
