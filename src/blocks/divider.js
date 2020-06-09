const { Block } = require('./base');
const { SlackDto } = require('../utility/lib');
const { types } = require('../utility/constants');

class DividerDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.blocks.divider;
    this.block_id = params.blockId;

    this.pruneAndFreeze();
  }
}

class Divider extends Block {
  constructor(params = {}) {
    super();

    this.props.blockId = params.blockId;

    this.finalizeConstruction();
  }

  /**
   * @private
   */

  build() {
    return this.getResult(DividerDto);
  }
}

module.exports = {
  Divider,
  DividerDto,
};
