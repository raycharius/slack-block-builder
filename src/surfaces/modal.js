const { AdvancedSurface } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { types, props } = require('../utility/constants');

class ModalDto extends SlackDto {
  constructor(params) {
    super();

    this.type = types.surfaces.modal;
    this.title = params.title;
    this.blocks = params.blocks;
    this.close = params.close;
    this.submit = params.submit;
    this.private_metadata = params.privateMetaData;
    this.callback_id = params.callbackId;
    this.clear_on_close = params.clearOnClose;
    this.notify_on_close = params.notifyOnClose;
    this.external_id = params.externalId;
    this.submit_disabled = params.submitDisabled;

    this.pruneAndFreeze();
  }
}

class Modal extends AdvancedSurface {
  constructor(params = {}) {
    super();

    this.props.title = params.title;
    this.props.close = params.close;
    this.props.submit = params.submit;
    this.props.privateMetaData = params.privateMetaData;
    this.props.callbackId = params.callbackId;
    this.props.externalId = params.externalId;

    this.finalizeConstruction();
  }

  /**
   * Sets the title of the Modal dialog
   *
   * **Slack Validation Rules:**
   *    * **Required** ⚠
   *    * Max 24 characters
   *
   * {@link https://api.slack.com/reference/surfaces/views|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  title(string) {
    return this.set(string, props.title);
  }

  /**
   * Sets the text displayed on the button that closes the Modal
   *
   * **Slack Validation Rules:**
   *    * Max 24 characters
   *
   * {@link https://api.slack.com/reference/surfaces/views|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  close(string) {
    return this.set(string, props.close);
  }

  /**
   * Sets the text displayed on the button that submits the Modal
   *
   * **Slack Validation Rules:**
   *    * Max 24 characters
   *
   * {@link https://api.slack.com/reference/surfaces/views|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  submit(string) {
    return this.set(string, props.submit);
  }

  /**
   * Configures the Modal to clear all open and pushed views in the Modal flow
   *
   * {@link https://api.slack.com/reference/surfaces/views|View in Slack API Documentation}
   *
   * @return {this} The instance on which the method is called
   */

  clearOnClose() {
    return this.set(true, props.clearOnClose);
  }

  /**
   * Configures the Modal to send a notification to your server when closed
   *
   * {@link https://api.slack.com/reference/surfaces/views|View in Slack API Documentation}
   *
   * @return {this} The instance on which the method is called
   */

  notifyOnClose() {
    return this.set(true, props.notifyOnClose);
  }

  /**
   * Sets a custom identifier that must be unique for all views on a per-team basis
   *
   * **Slack Validation Rules:**
   *    * Max 255 characters
   *
   * {@link https://api.slack.com/reference/surfaces/views|View in Slack API Documentation}
   *
   * @param {string} string
   * @return {this} The instance on which the method is called
   */

  externalId(string) {
    return this.set(string, props.externalId);
  }

  /**
   * @private
   */

  build() {
    if (!this.hasBeenBuilt) {
      const augmentedProps = {
        title: BuilderHelper.getPlainTextObject(this.props.title),
        blocks: BuilderHelper.getBuilderResults(this.props.blocks),
        close: BuilderHelper.getPlainTextObject(this.props.close),
        submit: BuilderHelper.getPlainTextObject(this.props.submit),
      };

      this.getResult(ModalDto, augmentedProps);
    }

    return this.result;
  }
}

module.exports = {
  Modal,
  ModalDto,
};
