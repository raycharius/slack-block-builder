const { Block } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types, props } = require('../utility/constants');

class InputDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.blocks.input;
    this.label = params.label;
    this.element = params.element;
    this.block_id = params.blockId;
    this.hint = params.hint;
    this.optional = params.optional;

    this.pruneAndFreeze();
  }
}

class Input extends Block {
  constructor(params = {}) {
    super();

    this.props.label = params.label;
    this.props.blockId = params.blockId;
    this.props.hint = params.hint;

    this.finalizeConstruction();
  }

  /**
   * Sets a label to be displayed for the Input Block
   *
   * **Slack Validation Rules:**
   *    * **Required** ⚠
   *    * Max 2000 characters
   *
   * {@link https://api.slack.com/reference/block-kit/blocks#input|View in Slack API Documentation}
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  label(string) {
    return this.set(string, props.label);
  }

  /**
   * Sets the interactive Element of the Input Block
   *
   * **Slack Validation Rules:**
   *    * **Required** ⚠
   *    * Max 1 Element
   *    * Supports TextInput, SelectMenus, MultiSelectMenus, and DatePickers
   *
   * {@link https://api.slack.com/reference/block-kit/blocks#input|View in Slack API Documentation}
   *
   * @param {Element} element
   * @return {this} The instance on which the method is called
   */

  element(element) {
    return this.set(element, props.element);
  }

  /**
   * Sets the hint to be displayed under the Input.
   *
   * **Slack Validation Rules:**
   *    * Max 2000 characters
   *
   * {@link https://api.slack.com/reference/block-kit/blocks#input|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  hint(string) {
    return this.set(string, props.hint);
  }

  /**
   * Sets the 'optional' parameter to true, allowing the user to submit
   * the form without inputting a value into the Input Element
   *
   * {@link https://api.slack.com/reference/block-kit/blocks#input|View in Slack API Documentation}
   *
   * @return {this} The instance on which the method is called
   */

  optional() {
    return this.set(true, props.optional);
  }

  /**
   * @private
   */

  build() {
    const augmentedProps = {
      label: BuilderHelper.getPlainTextObject(this.props.label),
      hint: BuilderHelper.getPlainTextObject(this.props.hint),
      element: BuilderHelper.getBuilderResult(this.props.element),
    };

    return this.getResult(InputDto, augmentedProps);
  }
}

module.exports = {
  Input,
  InputDto,
};
