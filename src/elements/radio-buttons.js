const { SelectableElement } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types, props } = require('../utility/constants');

class RadioButtonsDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.elements.radiobutton;
    this.action_id = params.actionId;
    this.options = params.options;
    this.initial_option = params.initialOption;
    this.confirm = params.confirm;

    this.pruneAndFreeze();
  }
}

class RadioButtons extends SelectableElement {
  constructor(params = {}) {
    super();

    this.props.actionId = params.actionId;

    this.finalizeConstruction();
  }

  /**
   * Sets the default selected item in the menu
   *
   * **Slack Validation Rules:**
   *    * Must be an exact match to one of the provided options
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#radio|View in Slack API Documentation}
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
      options: BuilderHelper.getOptions(this.props.options, { isMarkdown: true }),
      initialOption: BuilderHelper.getOption(this.props.initialOption, { isMarkdown: true }),
      confirm: BuilderHelper.getBuilderResult(this.props.confirm),
    };

    return this.getResult(RadioButtonsDto, augmentedProps);
  }
}

module.exports = {
  RadioButtons,
  RadioButtonsDto,
};
