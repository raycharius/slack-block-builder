const { ConfirmationDialog, ConfirmationDialogDto } = require('./confirmation-dialog');
const { Option, OptionDto } = require('./option');
const { OptionGroup, OptionGroupDto } = require('./option-group');

const BitDto = { ConfirmationDialogDto, OptionDto, OptionGroupDto };

const getBits = (config) => {
  const getClass = (Class, params) => new Class(params, config);

  return {

    /**
     * Creates and returns a ConfirmationDialog Bit
     *
     * {@link https://api.slack.com/reference/block-kit/composition-objects#confirm|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.title] Sets the title displayed in the confirmation dialog
     * @param {string} [params.text] Sets the textual content of the confirmation dialog
     * @param {string} [params.confirm] Sets the text for the button that confirms the action.
     * @param {string} [params.deny]Sets the text for the button that cancels the action.
     * @return {ConfirmationDialog} An instance of ConfirmationDialog
     */

    ConfirmationDialog: (params) => getClass(ConfirmationDialog, params),

    /**
     * Creates and returns an Option Bit
     *
     * {@link https://api.slack.com/reference/block-kit/composition-objects#option|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.text] Sets the text displayed in the menu for the current Option
     * @param {string} [params.value] Sets the value passed to your app when this Option is clicked or submitted
     * @param {string} [params.description] Sets a description shown next to the Option in a RadioButton Element
     * @param {string} [params.url] Sets the URL to redirect the user to when this Option is clicked (in an OverflowMenu)
     * @return {Option} An instance of Option
     */

    Option: (params) => getClass(Option, params),

    /**
     * Creates and returns an OpotionGroup Bit
     *
     * {@link https://api.slack.com/reference/block-kit/composition-objects#option_group|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.label] Sets the label shown above the group of Options
     * @return {OptionGroup} An instance of OptionsGroup
     */

    OptionGroup: (params) => getClass(OptionGroup, params),
  };
};

module.exports = {
  ConfirmationDialog,
  Option,
  OptionGroup,
  BitDto,
  getBits,
};
