const ConfirmableElement = require('./confirmable-element');
const { props } = require('../../utility/constants');

class SelectableElement extends ConfirmableElement {

  /**
   * Sets the Options for the current Element
   *
   * **Slack Validation Rules:**
   *    * **Required** ⚠
   *    * Max 100 Options
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements|View in Slack API Documentation}
   *
   * @param {...Option|Array<Option>} options Accepts multiple arguments or Array
   * @return {this} The instance on which the method is called
   */

  options(...options) {
    return this.append(options.flat(), props.options);
  }
}

module.exports = SelectableElement;
