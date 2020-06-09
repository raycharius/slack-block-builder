const { SelectElement } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types, props } = require('../utility/constants');

class StaticSelectDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.elements.select.static;
    this.placeholder = params.placeholder;
    this.action_id = params.actionId;
    this.options = params.options;
    this.option_groups = params.optionGroups;
    this.initial_option = params.initialOption;
    this.confirm = params.confirm;

    this.pruneAndFreeze();
  }
}

class StaticSelect extends SelectElement {
  constructor(params = {}) {
    super();

    this.props.placeholder = params.placeholder;
    this.props.actionId = params.actionId;

    this.finalizeConstruction();
  }

  /**
   * Sets the Options for the StaticSelect
   *
   * **Slack Validation Rules:**
   *    * **Required** ⚠
   *    * Max 100 Options
   *    * Only one of options property or optionGroups should be defined
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#static_select|View in Slack API Documentation}
   *
   * @param {...Option|Array<Option>} options Accepts multiple arguments or Array
   * @return {this} The instance on which the method is called
   */

  options(...options) {
    return this.append(options.flat(), props.options);
  }

  /**
   * Sets the OptionGroup for the StaticSelect, Options placed into
   * logical and named groups.
   *
   * **Slack Validation Rules:**
   *    * Max 100 Options
   *    * Only one of options property or optionGroups should be defined
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#static_select|View in Slack API Documentation}
   *
   * @param {...OptionGroup|Array<OptionGroup>} optionGroups Accepts multiple arguments or Array
   * @return {this} The instance on which the method is called
   */

  optionGroups(...optionGroups) {
    return this.append(optionGroups.flat(), props.optionGroups);
  }

  /**
   * Sets the default selected item in the menu
   *
   * **Slack Validation Rules:**
   *    * Must be an exact match to one of the provided options
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#static_select|View in Slack API Documentation}
   *
   * @param {Option} option
   * @return {this} The instance on which the method is called
   */

  initialOption(option) {
    return this.set(option, props.initialOption);
  }

  /**
   * @private
   */

  build() {
    const augmentedProps = {
      placeholder: BuilderHelper.getPlainTextObject(this.props.placeholder),
      options: BuilderHelper.getOptions(this.props.options),
      optionGroups: BuilderHelper.getBuilderResults(this.props.optionGroups),
      initialOption: BuilderHelper.getOption(this.props.initialOption),
      confirm: BuilderHelper.getBuilderResult(this.props.confirm),
    };

    return this.getResult(StaticSelectDto, augmentedProps);
  }
}

module.exports = {
  StaticSelect,
  StaticSelectDto,
};
