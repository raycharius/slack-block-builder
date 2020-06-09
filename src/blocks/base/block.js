const { Builder } = require('../../utility/lib');
const { props, categories } = require('../../utility/constants');

class Block extends Builder {
  constructor() {
    super();

    this.category = categories.block;
  }

  /**
   * Sets a string to be an identifier for the block, that
   * will be available in interaction payloads
   *
   * **Slack Validation Rules:**
   *    * Max 255 characters
   *    * Must be unique to the view
   *    * If a Block changes, blockId property should change, too
   *
   * {@link https://api.slack.com/reference/block-kit/blocks|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  blockId(string) {
    return this.set(string, props.blockId);
  }

  /**
   * Performs no alterations to the object. Meant to simulate a closing
   * HTML tag for those who prefer the look of such code.
   *
   * @return {this} The instance on which the method is called
   */

  end() {
    return this;
  }
}
module.exports = Block;
