const { Block } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types, props } = require('../utility/constants');

class HeaderDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.blocks.header;
    this.text = params.text;
    this.block_id = params.blockId;

    this.pruneAndFreeze();
  }
}

class Header extends Block {
  constructor(params = {}) {
    super();

    this.props.text = params.text;
    this.props.blockId = params.blockId;

    this.finalizeConstruction();
  }

  /**
   * Sets the text to be displayed in the Header Block
   *
   * **Slack Validation Rules:**
   *    * **Required** ⚠
   *    * Max 3000 characters
   *    * Plain text only
   *
   * {@link https://api.slack.com/reference/block-kit/blocks#header|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  text(string) {
    return this.set(string, props.text);
  }

  /**
   * @private
   */

  build() {
    const augmentedProps = {
      text: BuilderHelper.getPlainTextObject(this.props.text),
    };

    return this.getResult(HeaderDto, augmentedProps);
  }
}

module.exports = {
  Header,
  HeaderDto,
};
