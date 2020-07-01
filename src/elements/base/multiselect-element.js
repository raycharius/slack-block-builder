const SelectElement = require('./select-element');
const { props } = require('../../utility/constants');

class MultiSelectElement extends SelectElement {
  /**
   * Sets a limit to how many items the user can select in any one MultiSelect
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#multi_select|View in Slack API Documentation}
   *
   * @param {int} int
   * @return {this} The instance on which the method is called
   */

  maxSelectedItems(int) {
    return this.set(int, props.maxSelectedItems);
  }
}

module.exports = MultiSelectElement;
