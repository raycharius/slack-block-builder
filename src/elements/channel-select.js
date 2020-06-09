const { SelectElement } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types, props } = require('../utility/constants');

class ChannelSelectDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.elements.select.channels;
    this.placeholder = params.placeholder;
    this.action_id = params.actionId;
    this.initial_channel = params.initialChannel;
    this.confirm = params.confirm;
    this.response_url_enabled = params.responseUrlEnabled;

    this.pruneAndFreeze();
  }
}

class ChannelSelect extends SelectElement {
  constructor(params = {}) {
    super();

    this.props.placeholder = params.placeholder;
    this.props.actionId = params.actionId;
    this.props.initialChannel = params.initialChannel;

    this.finalizeConstruction();
  }

  /**
   * Sets the default selected item in the menu
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#channel_select|View in Slack API Documentation}
   *
   * @param {string} string Channel ID
   * @return {this} The instance on which the method is called
   */

  initialChannel(string) {
    return this.set(string, props.initialChannel);
  }

  /**
   * Sets option to true, allowing a response URL to be provided at submission
   *
   * **Slack Validation Rules:**
   *    * Only available in modals with Inputs ⚠
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#channel_select|View in Slack API Documentation}
   *
   * @return {this} The instance on which the method is called
   */

  responseUrlEnabled() {
    return this.set(true, props.responseUrlEnabled);
  }

  /**
   * @private
   */

  build() {
    const augmentedProps = {
      placeholder: BuilderHelper.getPlainTextObject(this.props.placeholder),
      confirm: BuilderHelper.getBuilderResult(this.props.confirm),
    };

    return this.getResult(ChannelSelectDto, augmentedProps);
  }
}

module.exports = {
  ChannelSelect,
  ChannelSelectDto,
};
