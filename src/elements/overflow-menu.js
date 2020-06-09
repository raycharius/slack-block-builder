const { SelectableElement } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types } = require('../utility/constants');

class OverflowMenuDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.elements.overflow;
    this.action_id = params.actionId;
    this.options = params.options;
    this.confirm = params.confirm;

    this.pruneAndFreeze();
  }
}

class OverflowMenu extends SelectableElement {
  constructor(params = {}) {
    super();

    this.props.actionId = params.actionId;

    this.finalizeConstruction();
  }

  /**
   * @private
   */

  build() {
    const augmentedProps = {
      options: BuilderHelper.getOptions(this.props.options),
      confirm: BuilderHelper.getBuilderResult(this.props.confirm),
    };

    return this.getResult(OverflowMenuDto, augmentedProps);
  }
}

module.exports = {
  OverflowMenu,
  OverflowMenuDto,
};
