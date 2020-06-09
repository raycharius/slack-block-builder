const { MultiSelectElement } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types, props } = require('../utility/constants');

class ChannelMultiSelectDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.elements.multiselect.channels;
    this.placeholder = params.placeholder;
    this.action_id = params.actionId;
    this.initial_channels = params.initialChannels;
    this.confirm = params.confirm;
    this.max_selected_items = params.maxSelectedItems;

    this.pruneAndFreeze();
  }
}

class ChannelMultiSelect extends MultiSelectElement {
  constructor(params = {}) {
    super();

    this.props.placeholder = params.placeholder;
    this.props.actionId = params.actionId;
    this.props.maxSelectedItems = params.maxSelectedItems;

    this.finalizeConstruction();
  }

  /**
   * Sets the default selected items in the menu
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#channel_multi_select|View in Slack API Documentation}
   *
   * @param {...string|Array<string>} strings Accepts multiple arguments or Array
   * @return {this} The instance on which the method is called
   */

  initialChannels(...strings) {
    return this.append(strings.flat(), props.initialChannels);
  }

  /**
   * @private
   */

  build() {
    const augmentedProps = {
      placeholder: BuilderHelper.getPlainTextObject(this.props.placeholder),
      confirm: BuilderHelper.getBuilderResult(this.props.confirm),
    };

    return this.getResult(ChannelMultiSelectDto, augmentedProps);
  }
}

module.exports = {
  ChannelMultiSelect,
  ChannelMultiSelectDto,
};
