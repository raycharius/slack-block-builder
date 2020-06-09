const { SelectElement } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types, props } = require('../utility/constants');

class ExternalSelectDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.elements.select.external;
    this.placeholder = params.placeholder;
    this.action_id = params.actionId;
    this.initial_option = params.initialOption;
    this.min_query_length = params.minQueryLength;
    this.confirm = params.confirm;

    this.pruneAndFreeze();
  }
}

class ExternalSelect extends SelectElement {
  constructor(params = {}) {
    super();

    this.props.placeholder = params.placeholder;
    this.props.actionId = params.actionId;
    this.props.minQueryLength = params.minQueryLength;

    this.finalizeConstruction();
  }

  /**
   * Sets the select menu to have an initial value
   *
   * **Slack Validation Rules:**
   *    * Must be exact match to one of the Options
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#external_select|View in Slack API Documentation}
   *
   * @param {Option} option
   * @return {this} The instance on which the method is called
   */

  initialOption(option) {
    return this.set(option, props.initialOption);
  }

  /**
   * Sets a minimum number of characters types before querying your options URL
   *
   * **Slack Validation Rules:**
   *    * If not set, request will be sent on every character change
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#external_select|View in Slack API Documentation}
   *
   * @param {int} int
   * @return {this} The instance on which the method is called
   */

  minQueryLength(int) {
    return this.set(int, props.minQueryLength);
  }

  /**
   * @private
   */

  build() {
    const augmentedProps = {
      placeholder: BuilderHelper.getPlainTextObject(this.props.placeholder),
      initialOption: BuilderHelper.getOption(this.props.initialOption),
      confirm: BuilderHelper.getBuilderResult(this.props.confirm),
    };

    return this.getResult(ExternalSelectDto, augmentedProps);
  }
}

module.exports = {
  ExternalSelect,
  ExternalSelectDto,
};
