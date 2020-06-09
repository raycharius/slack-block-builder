const { AdvancedSurface } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types } = require('../utility/constants');

class HomeTabDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.surfaces.home;
    this.blocks = params.blocks;
    this.private_metadata = params.privateMetaData;
    this.callback_id = params.callbackId;
    this.external_id = params.externalId;

    this.pruneAndFreeze();
  }
}

class HomeTab extends AdvancedSurface {
  constructor(params = {}) {
    super();

    this.props.privateMetaData = params.privateMetaData;
    this.props.callbackId = params.callbackId;
    this.props.externalId = params.externalId;

    this.finalizeConstruction();
  }

  /**
   * @private
   */

  build() {
    const augmentedProps = {
      blocks: BuilderHelper.getBuilderResults(this.props.blocks),
    };

    return this.getResult(HomeTabDto, augmentedProps);
  }
}

module.exports = {
  HomeTab,
  HomeTabDto,
};
