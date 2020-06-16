const { Builder } = require('../../utility/lib');
const { props, categories } = require('../../utility/constants');

class Surface extends Builder {
  constructor() {
    super();

    this.category = categories.surface;
  }

  /**
   * Sets the Blocks of the Surface
   *
   * **Slack Validation Rules:**
   *    * **Required** ⚠
   *    * Max 100 Blocks
   *
   * {@link https://api.slack.com/reference/surfaces/views|View in Slack API Documentation}
   *
   * @param {...Block|Array<Block>} blocks Accepts multiple arguments or Array
   * @return {this} The instance on which the method is called
   */

  blocks(...blocks) {
    return this.append(blocks.flat(), props.blocks);
  }

  /**
   * Builds the view and returns it as a Slack API-compatible object.
   *
   * @return {Object} An object representation of the built UI
   */

  buildToObject() {
    this.build();

    return this.result;
  }

  /**
   * Builds the view and returns it as a Slack API-compatible JSON string.
   *
   * @return {String} A JSON string representation of the built UI
   */

  buildToJSON() {
    this.build();

    return JSON.stringify(this.result);
  }

  /**
   * Builds the view and returns a Slack API-compatible array of Blocks objects.
   *
   * {@link https://api.slack.com/block-kit|View in Slack API Documentation}
   *
   * @return {Array} Array of built Block objects
   */

  getBlocks() {
    this.build();

    return [...this.result.blocks];
  }
}

module.exports = Surface;
