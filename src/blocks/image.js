const { Block } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types, props } = require('../utility/constants');

class ImageDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.blocks.image;
    this.image_url = params.imageUrl;
    this.alt_text = params.altText;
    this.title = params.title;
    this.block_id = params.blockId;

    this.pruneAndFreeze();
  }
}

class Image extends Block {
  constructor(params = {}) {
    super();

    this.props.imageUrl = params.imageUrl;
    this.props.altText = params.altText;
    this.props.title = params.title;
    this.props.blockId = params.blockId;

    this.finalizeConstruction();
  }

  /**
   * Sets the source URL to load the Image from
   *
   * **Slack Validation Rules:**
   *    * **Required** ⚠
   *    * Max 2000 characters
   *
   * {@link https://api.slack.com/reference/block-kit/blocks#image|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  imageUrl(string) {
    return this.set(string, props.imageUrl);
  }

  /**
   * Sets the textual summary of the Image
   *
   * **Slack Validation Rules:**
   *    * **Required** ⚠
   *    * Max 2000 characters
   *
   * {@link https://api.slack.com/reference/block-kit/blocks#image|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  altText(string) {
    return this.set(string, props.altText);
  }

  /**
   * Sets an optional title for the Image
   *
   * **Slack Validation Rules:**
   *    * Max 2000 characters
   *
   * {@link https://api.slack.com/reference/block-kit/blocks#image|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  title(string) {
    return this.set(string, props.title);
  }

  /**
   * @private
   */

  build() {
    const augmentedProps = {
      title: BuilderHelper.getPlainTextObject(this.props.title),
    };

    return this.getResult(ImageDto, augmentedProps);
  }
}

module.exports = {
  Image,
  ImageDto,
};
