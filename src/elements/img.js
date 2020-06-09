const { Element } = require('./base');
const { SlackDto } = require('../utility/lib');
const { types, props } = require('../utility/constants');

class ImgDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.elements.image;
    this.image_url = params.imageUrl;
    this.alt_text = params.altText;

    this.pruneAndFreeze();
  }
}

class Img extends Element {
  constructor(params = {}) {
    super();

    this.props.imageUrl = params.imageUrl;
    this.props.altText = params.altText;

    this.finalizeConstruction();
  }

  /**
   * Sets the source URL to load the Img from
   *
   * **Slack Validation Rules:**
   *    * **Required** ⚠
   *    * Max 2000 characters
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#image|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  imageUrl(string) {
    return this.set(string, props.imageUrl);
  }

  /**
   * Sets the textual summary of the Img
   *
   * **Slack Validation Rules:**
   *    * **Required** ⚠
   *    * Max 2000 characters
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#image|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  altText(string) {
    return this.set(string, props.altText);
  }

  /**
   * @private
   */

  build() {
    return this.getResult(ImgDto);
  }
}

module.exports = {
  Img,
  ImgDto,
};
