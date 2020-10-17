const { Button, ButtonDto } = require('./button');
const { ChannelMultiSelect, ChannelMultiSelectDto } = require('./channel-multiselect');
const { ChannelSelect, ChannelSelectDto } = require('./channel-select');
const { Checkboxes, CheckboxesDto } = require('./checkboxes');
const { ConversationMultiSelect, ConversationMultiSelectDto } = require('./conversations-multiselect');
const { ConversationSelect, ConversationSelectDto } = require('./conversations-select');
const { DatePicker, DatePickerDto } = require('./datepicker');
const { ExternalMultiSelect, ExternalMultiSelectDto } = require('./external-multiselect');
const { ExternalSelect, ExternalSelectDto } = require('./external-select');
const { Img, ImgDto } = require('./img');
const { TextInput, TextInputDto } = require('./text-input');
const { OverflowMenu, OverflowMenuDto } = require('./overflow-menu');
const { RadioButtons, RadioButtonsDto } = require('./radio-buttons');
const { StaticSelect, StaticSelectDto } = require('./static-select');
const { StaticMultiSelect, StaticMultiSelectDto } = require('./static-multiselect');
const { TimePicker, TimePickerDto } = require('./time-picker');
const { UserMultiSelect, UserMultiSelectDto } = require('./user-multiselect');
const { UserSelect, UserSelectDto } = require('./user-select');

const ElementDto = {
  ButtonDto,
  ChannelMultiSelectDto,
  ChannelSelectDto,
  CheckboxesDto,
  ConversationMultiSelectDto,
  ConversationSelectDto,
  DatePickerDto,
  ExternalMultiSelectDto,
  ExternalSelectDto,
  ImgDto,
  TextInputDto,
  OverflowMenuDto,
  RadioButtonsDto,
  StaticMultiSelectDto,
  StaticSelectDto,
  TimePickerDto,
  UserMultiSelectDto,
  UserSelectDto,
};

const getElements = () => {
  const getInstance = (Class, params) => new Class(params);

  return {

    /**
     * Creates and returns a Button Element
     *
     * {@link https://api.slack.com/reference/block-kit/block-elements#button|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads
     * @param {string} [params.text] Sets the display text for the Button
     * @param {string} [params.url] Sets the URL to redirect the user to when this Button is clicked
     * @param {string} [params.value] Sets the value to be passed to your app when this Button is clicked
     * @return {Button} An instance of Button
     */

    Button: (params) => getInstance(Button, params),

    /**
     * Creates and returns a ChannelMultiSelect Element
     *
     * {@link https://api.slack.com/reference/block-kit/block-elements#channel_multi_select|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads
     * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with
     * @param {int} [params.maxSelectedItems] Sets a limit to how many items the user can select
     * @return {ChannelMultiSelect} An instance of ChannelMultiSelect
     */

    ChannelMultiSelect: (params) => getInstance(ChannelMultiSelect, params),

    /**
     * Creates and returns a ChannelSelect Element
     *
     * {@link https://api.slack.com/reference/block-kit/block-elements#channel_select|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads
     * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with
     * @param {string} [params.initialChannel] Sets the default selected item in the menu
     * @return {ChannelSelect} An instance of ChannelSelect
     */

    ChannelSelect: (params) => getInstance(ChannelSelect, params),

    /**
     * Creates and returns a Checkboxes Element
     *
     * {@link https://api.slack.com/reference/block-kit/block-elements#checkboxes|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads
     * @return {Checkboxes} An instance of Checkboxes
     */

    Checkboxes: (params) => getInstance(Checkboxes, params),

    /**
     * Creates and returns a ConversationMultiSelect Element
     *
     * {@link https://api.slack.com/reference/block-kit/block-elements#conversation_multi_select|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads
     * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with
     * @param {int} [params.maxSelectedItems] Sets a limit to how many items the user can select
     * @return {ConversationMultiSelect} An instance of ConversationMultiSelect
     */

    ConversationMultiSelect: (params) => getInstance(ConversationMultiSelect, params),

    /**
     * Creates and returns a ConversationSelect Element
     *
     * {@link https://api.slack.com/reference/block-kit/block-elements#conversation_select|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads
     * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with
     * @param {string} [params.initialConversation] Sets the default selected item in the menu
     * @return {ConversationSelect} An instance of ConversationSelect
     */

    ConversationSelect: (params) => getInstance(ConversationSelect, params),

    /**
     * Creates and returns a DatePicker Element
     *
     * {@link https://api.slack.com/reference/block-kit/block-elements#datepicker|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads
     * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with
     * @param {string} [params.initialDate] Sets the default selected date in the menu
     * @return {DatePicker} An instance of DatePicker
     */

    DatePicker: (params) => getInstance(DatePicker, params),

    /**
     * Creates and returns a ExternalMultiSelect Element
     *
     * {@link https://api.slack.com/reference/block-kit/block-elements#external_multi_select|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads
     * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with
     * @param {int} [params.maxSelectedItems] Sets a limit to how many items the user can select
     * @param {int} [params.minQueryLength] Sets a minimum number of characters types before querying your options URL
     * @return {ExternalMultiSelect} An instance of ExternalMultiSelect
     */

    ExternalMultiSelect: (params) => getInstance(ExternalMultiSelect, params),

    /**
     * Creates and returns a ExternalSelect Element
     *
     * {@link https://api.slack.com/reference/block-kit/block-elements#external_select|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads
     * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with
     * @param {int} [params.minQueryLength] Sets a minimum number of characters types before querying your options URL
     * @return {ExternalSelect} An instance of ExternalSelect
     */

    ExternalSelect: (params) => getInstance(ExternalSelect, params),

    /**
     * Creates and returns an Img Element
     *
     * {@link https://api.slack.com/reference/block-kit/block-elements#image|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.imageUrl] Sets the source URL to load the Img from
     * @param {string} [params.altText] Sets the textual summary of the Img
     * @return {Img} An instance of Img
     */

    Img: (params) => getInstance(Img, params),

    /**
     * Creates and returns an OverflowMenu Element
     *
     * {@link https://api.slack.com/reference/block-kit/block-elements#overflow|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads
     * @return {OverflowMenu} An instance of OverflowMenu
     */

    OverflowMenu: (params) => getInstance(OverflowMenu, params),

    /**
     * Creates and returns a RadioButtons Element
     *
     * {@link https://api.slack.com/reference/block-kit/block-elements#radio|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads
     * @return {RadioButtons} An instance of RadioButtons
     */

    RadioButtons: (params) => getInstance(RadioButtons, params),

    /**
     * Creates and returns a StaticMultiSelect Element
     *
     * {@link https://api.slack.com/reference/block-kit/block-elements#static_multi_select|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads
     * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with
     * @param {int} [params.maxSelectedItems] Sets a limit to how many items the user can select
     * @return {StaticMultiSelect} An instance of StaticMultiSelect
     */

    StaticMultiSelect: (params) => getInstance(StaticMultiSelect, params),

    /**
     * Creates and returns a StaticSelect Element
     *
     * {@link https://api.slack.com/reference/block-kit/block-elements#static_select|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads
     * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with
     * @return {StaticSelect} An instance of StaticSelect
     */

    StaticSelect: (params) => getInstance(StaticSelect, params),

    /**
     * Creates and returns a TextInput Element
     *
     * {@link https://api.slack.com/reference/block-kit/block-elements#input|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads
     * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with
     * @param {string} [params.initialValue] Sets the default text entered into the TextInput at modal load
     * @param {int} [params.minLength] Sets a minimum character count in order for the user to submit the form
     * @param {int} [params.maxLength] Sets a maximum character count allowed to send the form
     * @return {TextInput} An instance of Input
     */

    TextInput: (params) => getInstance(TextInput, params),

    /**
     * Creates and returns a TimePicker Element
     *
     * {@link https://api.slack.com/reference/block-kit/block-elements#timepicker|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads
     * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with
     * @param {string} [params.initialTime] Sets the default selected time in the menu
     * @return {TimePicker} An instance of TimePicker
     */

    TimePicker: (params) => getInstance(TimePicker, params),

    /**
     * Creates and returns a UserMultiSelect Element
     *
     * {@link https://api.slack.com/reference/block-kit/block-elements#users_multi_select|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads
     * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with
     * @param {int} [params.maxSelectedItems] Sets a limit to how many items the user can select
     * @return {UserMultiSelect} An instance of UserMultiSelect
     */

    UserMultiSelect: (params) => getInstance(UserMultiSelect, params),

    /**
     * Creates and returns a UserSelect Element
     *
     * {@link https://api.slack.com/reference/block-kit/block-elements#users_select|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.actionId] Sets a string to be an identifier for the source of an action in interaction payloads
     * @param {string} [params.placeholder] Adds the text in place of the input before selected or interacted with
     * @param {string} [params.initialUser]
     * @return {UserSelect} An instance of UserSelect
     */

    UserSelect: (params) => getInstance(UserSelect, params),
  };
};

module.exports = {
  Button,
  ChannelMultiSelect,
  ChannelSelect,
  Checkboxes,
  ConversationMultiSelect,
  ConversationSelect,
  DatePicker,
  ExternalMultiSelect,
  ExternalSelect,
  Img,
  TextInput,
  OverflowMenu,
  RadioButtons,
  StaticMultiSelect,
  StaticSelect,
  UserMultiSelect,
  UserSelect,
  ElementDto,
  getElements,
};
