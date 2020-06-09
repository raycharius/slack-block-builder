const { MultiSelectElement } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types, props } = require('../utility/constants');

class ExternalMultiSelectDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.elements.multiselect.external;
    this.placeholder = params.placeholder;
    this.action_id = params.actionId;
    this.min_query_length = params.minQueryLength;
    this.initial_options = params.initialOptions;
    this.confirm = params.confirm;
    this.max_selected_items = params.maxSelectedItems;

    this.pruneAndFreeze();
  }
}

class ExternalMultiSelect extends MultiSelectElement {
  constructor(params = {}) {
    super();

    this.props.placeholder = params.placeholder;
    this.props.actionId = params.actionId;
    this.props.minQueryLength = params.minQueryLength;
    this.props.maxSelectedItems = params.maxSelectedItems;

    this.finalizeConstruction();
  }

  /**
   * Sets a minimum number of characters types before querying your options URL
   *
   * **Slack Validation Rules:**
   *    * If not set, request will be sent on every character change
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#external_multi_select|View in Slack API Documentation}
   *
   * @param {int} int
   * @return {this} The instance on which the method is called
   */

  minQueryLength(int) {
    return this.set(int, props.minQueryLength);
  }

  /**
   * Sets the select menu to have an initial value
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#external_multi_select|View in Slack API Documentation}
   *
   * @param {...Option|Array<Option>} options Accepts multiple arguments or Array
   * @return {this} The instance on which the method is called
   */

  initialOptions(...options) {
    return this.append(options.flat(), props.initialOptions);
  }

  /**
   * @private
   */

  build() {
    const augmentedProps = {
      placeholder: BuilderHelper.getPlainTextObject(this.props.placeholder),
      initialOptions: BuilderHelper.getOptions(this.props.initialOptions),
      confirm: BuilderHelper.getBuilderResult(this.props.confirm),
    };

    return this.getResult(ExternalMultiSelectDto, augmentedProps);
  }
}

module.exports = {
  ExternalMultiSelect,
  ExternalMultiSelectDto,
};
