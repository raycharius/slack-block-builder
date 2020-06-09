const { Block } = require('./base');
const { SlackDto } = require('../utility/lib');
const { types, enumValues, props } = require('../utility/constants');

class FileDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.blocks.file;
    this.source = enumValues.remote;
    this.external_id = params.externalId;
    this.block_id = params.blockId;

    this.pruneAndFreeze();
  }
}

class File extends Block {
  constructor(params = {}) {
    super();

    this.props.externalId = params.externalId;
    this.props.blockId = params.blockId;

    this.finalizeConstruction();
  }

  /**
   * Sets the Slack-provided ID for the external file
   *
   * {@link https://api.slack.com/reference/block-kit/blocks#file|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  externalId(string) {
    return this.set(string, props.externalId);
  }

  /**
   * @private
   */

  build() {
    return this.getResult(FileDto);
  }
}

module.exports = {
  File,
  FileDto,
};
