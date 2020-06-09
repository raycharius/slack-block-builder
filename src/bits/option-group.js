const { Bit } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { props } = require('../utility/constants');

class OptionGroupDto extends SlackDto {
  constructor(params) {
    super();

    this.label = params.label;
    this.options = params.options;

    this.pruneAndFreeze();
  }
}

class OptionGroup extends Bit {
  constructor(params = {}) {
    super();

    this.props.label = params.label;

    this.finalizeConstruction();
  }

  /**
   * Sets the label shown above the group of Options
   *
   * **Slack Validation Rules:**
   *    * **Required** ⚠
   *    * Max 75 characters
   *
   * {@link https://api.slack.com/reference/block-kit/composition-objects#option_group|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  label(string) {
    return this.set(string, props.label);
  }

  /**
   * Sets the Options displayed in this OptionGroup
   *
   * **Slack Validation Rules:**
   *    * **Required** ⚠
   *    * Max 100 Options
   *
   * {@link https://api.slack.com/reference/block-kit/composition-objects#option_group|View in Slack API Documentation}
   *
   * @param {...Option|Array<Option>} options Accepts multiple arguments or Array
   * @return {this} The instance on which the method is called
   */

  options(...options) {
    return this.append(options.flat(), props.options);
  }

  /**
   * @private
   */

  build() {
    const augmentedProps = {
      label: BuilderHelper.getPlainTextObject(this.props.label),
      options: BuilderHelper.getBuilderResults(this.props.options),
    };

    return this.getResult(OptionGroupDto, augmentedProps);
  }
}

module.exports = {
  OptionGroup,
  OptionGroupDto,
};
