const { ConfirmableElement } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types, props } = require('../utility/constants');

class TimePickerDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.elements.timepicker;
    this.action_id = params.actionId;
    this.placeholder = params.placeholder;
    this.initial_time = params.initialTime;
    this.confirm = params.confirm;

    this.pruneAndFreeze();
  }
}

class TimePicker extends ConfirmableElement {
  constructor(params = {}) {
    super();

    this.props.placeholder = params.placeholder;
    this.props.actionId = params.actionId;
    this.props.initialTime = params.initialTime;

    this.finalizeConstruction();
  }

  /**
   * Adds the text in place of the input before selected or
   * interacted with
   *
   * **Slack Validation Rules:**
   *    * Max 150 characters
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#timepicker|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  placeholder(string) {
    return this.set(string, props.placeholder);
  }

  /**
   * Sets the default selected time in the menu
   *
   * **Slack Validation Rules:**
   *    * Set in HH:mm format, where HH is 24-hour hour format and mm is minutes with a leading zero
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#timepicker|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  initialTime(string) {
    return this.set(string, props.initialTime);
  }

  /**
   * @private
   */

  build() {
    const augmentedProps = {
      placeholder: BuilderHelper.getPlainTextObject(this.props.placeholder),
      initialDate: BuilderHelper.getFormattedDate(this.props.initialDate),
      confirm: BuilderHelper.getBuilderResult(this.props.confirm),
    };

    return this.getResult(TimePickerDto, augmentedProps);
  }
}

module.exports = {
  TimePicker,
  TimePickerDto,
};
