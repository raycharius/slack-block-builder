const { Block } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types, props } = require('../utility/constants');

class ActionsDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.blocks.actions;
    this.elements = params.elements;
    this.block_id = params.blockId;

    this.pruneAndFreeze();
  }
}

class Actions extends Block {
  constructor(params = {}) {
    super();

    this.props.blockId = params.blockId;

    this.finalizeConstruction();
  }

  /**
   * Sets the interactive Elements of the Actions Block
   *
   * **Slack Validation Rules:**
   *    * **Required** ⚠
   *    * Max 5 Elements
   *    * Supports Buttons, Selects, Overflows, and DatePickers
   *
   * {@link https://api.slack.com/reference/block-kit/blocks#actions|View in Slack API Documentation}
   *
   * @param {...Element|Array<Element>} elements Accepts multiple arguments or Array
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
      elements: BuilderHelper.getBuilderResults(this.props.elements),
    };

    return this.getResult(ActionsDto, augmentedProps);
  }
}

module.exports = {
  Actions,
  ActionsDto,
};
