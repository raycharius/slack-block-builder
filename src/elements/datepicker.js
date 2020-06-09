const { ConfirmableElement } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types, props } = require('../utility/constants');

class DatePickerDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.elements.datepicker;
    this.action_id = params.actionId;
    this.placeholder = params.placeholder;
    this.initial_date = params.initialDate;
    this.confirm = params.confirm;

    this.pruneAndFreeze();
  }
}

class DatePicker extends ConfirmableElement {
  constructor(params = {}) {
    super();

    this.props.placeholder = params.placeholder;
    this.props.actionId = params.actionId;
    this.props.initialDate = params.initialDate;

    this.finalizeConstruction();
  }

  /**
   * Adds the text in place of the input before selected or
   * interacted with
   *
   * **Slack Validation Rules:**
   *    * Max 150 characters
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#datepicker|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  placeholder(string) {
    return this.set(string, props.placeholder);
  }

  /**
   * Sets the default selected date in the menu
   *
   * {@link https://api.slack.com/reference/block-kit/block-elements#datepicker|View in Slack API Documentation}
   *
   * @param {Date} date
   * @return {this} The instance on which the method is called
   */

  initialDate(date) {
    return this.set(date, props.initialDate);
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

    return this.getResult(DatePickerDto, augmentedProps);
  }
}

module.exports = {
  DatePicker,
  DatePickerDto,
};
