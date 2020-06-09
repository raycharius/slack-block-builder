const { Block } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types, props } = require('../utility/constants');

class SectionDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.blocks.section;
    this.text = params.text;
    this.block_id = params.blockId;
    this.fields = params.fields;
    this.accessory = params.accessory;

    this.pruneAndFreeze();
  }
}

class Section extends Block {
  constructor(params = {}) {
    super();

    this.props.text = params.text;
    this.props.blockId = params.blockId;

    this.finalizeConstruction();
  }

  /**
   * Sets the text to be displayed in the Section Block
   *
   * **Slack Validation Rules:**
   *    * **Required if property fields undefined** ⚠
   *    * Max 3000 characters
   *    * Supports markdown
   *
   * {@link https://api.slack.com/reference/block-kit/blocks#section|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  text(string) {
    return this.set(string, props.text);
  }

  /**
   * Sets text fields in two columns, side-by-side
   *
   * **Slack Validation Rules:**
   *    * **Required if property text undefined** ⚠
   *    * Max 10 items
   *    * Max 2000 characters for each field
   *    * Supports markdown
   *
   * {@link https://api.slack.com/reference/block-kit/blocks#section|View in Slack API Documentation}
   *
   * @param {...string|Array<string>} fields Accepts multiple arguments or Array
   * @return {this} The instance on which the method is called
   */

  fields(...fields) {
    return this.append(fields.flat(), props.fields);
  }

  /**
   * Sets an interactive Element to be attached to the Section Block
   *
   * **Slack Validation Rules:**
   *    * Max 1 item
   *
   * {@link https://api.slack.com/reference/block-kit/blocks#section|View in Slack API Documentation}
   *
   * @param {Element} element
   * @return {this} The instance on which the method is called
   */

  accessory(element) {
    return this.set(element, props.accessory);
  }

  /**
   * @private
   */

  build() {
    const augmentedProps = {
      text: BuilderHelper.getMarkdownObject(this.props.text),
      fields: BuilderHelper.getFields(this.props.fields),
      accessory: BuilderHelper.getBuilderResult(this.props.accessory),
    };

    return this.getResult(SectionDto, augmentedProps);
  }
}

module.exports = {
  Section,
  SectionDto,
};
