const { SelectableElement } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types, props } = require('../utility/constants');

class CheckboxesDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.elements.checkbox;
    this.action_id = params.actionId;
    this.options = params.options;
    this.initial_options = params.initialOptions;
    this.confirm = params.confirm;

    this.pruneAndFreeze();
  }
}

class Checkboxes extends SelectableElement {
  constructor(params = {}) {
    super();

    this.props.actionId = params.actionId;

    this.finalizeConstruction();
  }

  /**
   * Sets the default selected items in the menu
   *
   * **Slack Validation Rules:**
   *    * Must be an exact match to one of the provided options
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#checkboxes|View in Slack API Documentation}
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
      options: BuilderHelper.getOptions(this.props.options, { isMarkdown: true }),
      initialOptions: BuilderHelper.getOptions(this.props.initialOptions, { isMarkdown: true }),
      confirm: BuilderHelper.getBuilderResult(this.props.confirm),
    };

    return this.getResult(CheckboxesDto, augmentedProps);
  }
}

module.exports = {
  Checkboxes,
  CheckboxesDto,
};
