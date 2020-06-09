const { Block } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types, props } = require('../utility/constants');

class ContextDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.blocks.context;
    this.elements = params.elements;
    this.block_id = params.blockId;

    this.pruneAndFreeze();
  }
}

class Context extends Block {
  constructor(params = {}) {
    super();

    this.props.blockId = params.blockId;

    this.finalizeConstruction();
  }

  /**
   * Sets the interactive Elements of the Context block
   *
   * **Slack Validation Rules:**
   *    * **Required** ⚠
   *    * Max 10 Elements
   *    * Supports strings and Image Elements
   *
   * {@link https://api.slack.com/reference/block-kit/blocks#context|View in Slack API Documentation}
   *
   * @param {...(string|Img)|Array<(string|Img)>} elements Accepts multiple arguments or Array
   * @return {this} The instance on which the method is called
   */

  elements(...elements) {
    return this.append(elements.flat(), props.elements);
  }

  /**
   * @private
   */

  build() {
    const augmentedProps = {
      elements: BuilderHelper.getElementsForContext(this.props.elements),
    };

    return this.getResult(ContextDto, augmentedProps);
  }
}

module.exports = {
  Context,
  ContextDto,
};
