const { MultiSelectElement } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types, props } = require('../utility/constants');

class StaticMultiSelectDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.elements.multiselect.static;
    this.placeholder = params.placeholder;
    this.action_id = params.actionId;
    this.options = params.options;
    this.option_groups = params.optionGroups;
    this.initial_options = params.initialOptions;
    this.confirm = params.confirm;
    this.max_selected_items = params.maxSelectedItems;

    this.pruneAndFreeze();
  }
}

class StaticMultiSelect extends MultiSelectElement {
  constructor(params = {}) {
    super();

    this.props.placeholder = params.placeholder;
    this.props.actionId = params.actionId;
    this.props.maxSelectedItems = params.maxSelectedItems;

    this.finalizeConstruction();
  }

  /**
   * Sets the Options for the StaticMultiSelect
   *
   * **Slack Validation Rules:**
   *    * **Required** ⚠
   *    * Max 100 Options
   *    * Only one of options property or optionGroups should be defined
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#static_multi_select|View in Slack API Documentation}
   *
   * @param {...Option|Option[]} options
   * @return {this} The instance on which the method is called
   */

  options(...options) {
    return this.append(options.flat(), props.options);
  }

  /**
   * Sets the OptionGroup for the StaticMultiSelect, Options placed into
   * logical and named groups.
   *
   * **Slack Validation Rules:**
   *    * Max 100 Options
   *    * Only one of options property or optionGroups should be defined
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#static_multi_select|View in Slack API Documentation}
   *
   * @param {...OptionGroup|OptionGroup[]} optionGroups
   * @return {this} The instance on which the method is called
   */

  optionGroups(...optionGroups) {
    return this.append(optionGroups.flat(), props.optionGroups);
  }

  /**
   * Sets the default selected item in the menu
   *
   * **Slack Validation Rules:**
   *    * Must have exact matches to the included Options
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#static_multi_select|View in Slack API Documentation}
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
      options: BuilderHelper.getOptions(this.props.options),
      initialOptions: BuilderHelper.getOptions(this.props.initialOptions),
      optionGroups: BuilderHelper.getBuilderResults(this.props.optionGroups),
      confirm: BuilderHelper.getBuilderResult(this.props.confirm),
    };

    return this.getResult(StaticMultiSelectDto, augmentedProps);
  }
}

module.exports = {
  StaticMultiSelect,
  StaticMultiSelectDto,
};
