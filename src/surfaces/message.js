const { Surface } = require('./base');
const { SlackDto } = require('../utility/lib');
const { BuilderHelper } = require('../utility/helpers');
const { props, enumValues } = require('../utility/constants');

class MessageDto extends SlackDto {
  constructor(params) {
    super();

    this.channel = params.channel;
    this.text = params.text;
    this.blocks = params.blocks;
    this.as_user = params.asUser;
    this.thread_ts = params.threadTs;
    this.replace_original = params.replaceOriginal;
    this.delete_original = params.deleteOriginal;
    this.response_type = params.responseType;
    this.post_at = params.postAt;

    this.pruneAndFreeze();
  }
}

class Message extends Surface {
  constructor(params = {}) {
    super();

    this.props.channel = params.channel;
    this.props.text = params.text;
    this.props.threadTs = params.threadTs;
    this.props.postAt = params.postAt;

    this.finalizeConstruction();
  }

  /**
   * The Slack channel ID to which the message is to be sent
   *
   * {@link https://api.slack.com/messaging/composing|View in Slack API Documentation}
   *
   * @param {string} string Slack channel ID
   * @return {this} The instance on which the method is called
   */

  channel(string) {
    return this.set(string, props.channel);
  }

  /**
   * Text to be displayed in the notification on the Message, or
   * in the body, if there are no Blocks available
   *
   * {@link https://api.slack.com/messaging/composing|View in Slack API Documentation}
   *
   * @param {string} string Slack channel ID
   * @return {this} The instance on which the method is called
   */

  text(string) {
    return this.set(string, props.text);
  }

  /**
   * Sets the message to be sent as either the user whose oAuth token is being used,
   * or as a bot user
   *
   * {@link https://api.slack.com/messaging/composing|View in Slack API Documentation}
   *
   * @return {this} The instance on which the method is called
   */

  asUser() {
    return this.set(true, props.asUser);
  }

  /**
   * Sets the message to be a reply in a thread to the message whose timestamp is passed
   *
   * {@link https://api.slack.com/messaging/composing|View in Slack API Documentation}
   *
   * @param {timestamp} timestamp The timestamp of message to be replied to
   * @return {this} The instance on which the method is called
   */

  threadTs(timestamp) {
    return this.set(timestamp, props.threadTs);
  }

  /**
   * Sets the message to be replace the original message from which the interaction was received
   *
   * {@link https://api.slack.com/messaging/composing|View in Slack API Documentation}
   *
   * @return {this} The instance on which the method is called
   */

  replaceOriginal() {
    return this.set(true, props.replaceOriginal);
  }

  /**
   * Sets the original message from which interaction was received to be deleted
   *
   * {@link https://api.slack.com/messaging/composing|View in Slack API Documentation}
   *
   * @return {this} The instance on which the method is called
   */

  deleteOriginal() {
    return this.set(true, props.deleteOriginal);
  }

  /**
   * Sets the message to only be visible by the user who invoked the action
   *
   * {@link https://api.slack.com/messaging/composing|View in Slack API Documentation}
   *
   * @return {this} The instance on which the method is called
   */

  ephemeral() {
    return this.set(enumValues.ephemeral, props.responseType);
  }

  /**
   * Sets the message to visible to everyone in the channel
   *
   * {@link https://api.slack.com/messaging/composing|View in Slack API Documentation}
   *
   * @return {this} The instance on which the method is called
   */

  inChannel() {
    return this.set(enumValues.inChannel, props.responseType);
  }

  /**
   * Sets a time for the message to be posted, as a scheduled message
   *
   * {@link https://api.slack.com/messaging/composing|View in Slack API Documentation}
   *
   * @param {timestamp} timestamp The timestamp of message to be replied to
   * @return {this} The instance on which the method is called
   */

  postAt(timestamp) {
    return this.set(timestamp, props.postAt);
  }

  /**
   * Builds the view and returns a Slack API-compatible array of Blocks objects.
   *
   * {@link https://api.slack.com/messaging/composing|View in Slack API Documentation}
   *
   * @return {Array} Array of built Block objects
   */

  getBlocks() {
    this.build();

    return [...this.result.blocks];
  }

  /**
   * When called, builds the view and prints to the console the preview URL in
   * order to open and preview the view on the Slack Block Builder website
   */

  printPreviewUrl() {
    this.build();

    console.log(encodeURI(`https://app.slack.com/block-kit-builder/#${JSON.stringify({ blocks: this.result.blocks })}`).replace(/[!'()*]/g, escape));
  }

  /**
   * @private
   */

  build() {
    const augmentedProps = {
      blocks: BuilderHelper.getBuilderResults(this.props.blocks),
    };

    return this.getResult(MessageDto, augmentedProps);
  }
}

module.exports = {
  Message,
  MessageDto,
};
