const { HomeTab, HomeTabDto } = require('./home-tab');
const { Message, MessageDto } = require('./message');
const { Modal, ModalDto } = require('./modal');
const { WorkflowStep, WorkflowStepDto } = require('./workflow-step');

const SurfaceDto = {
  HomeTabDto,
  MessageDto,
  ModalDto,
  WorkflowStepDto,
};

const getSurfaces = () => {
  const getInstance = (Class, params) => new Class(params);

  return {

    /**
     * Creates and returns a HomeTab Surface
     *
     * {@link https://api.slack.com/surfaces/tabs|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.callbackId] Sets a string sent back to your server together with all action and submission events.
     * @param {string} [params.externalId] Sets a custom identifier that must be unique for all views on a per-team basis
     * @param {string} [params.privateMetaData] Sets a string sent back to your server together with all action and submission events.
     * @return {HomeTab} An instance of HomeTab
     */

    HomeTab: (params) => getInstance(HomeTab, params),

    /**
     * Creates and returns a Message Surface
     *
     * {@link https://api.slack.com/messaging/composing|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.channel] The Slack channel ID to which the message is to be sent
     * @param {string} [params.text] Text to be displayed in the notification on the Message, or in the body, if there are no Blocks available
     * @param {timestamp} [params.threadTs] Sets the message to be a reply in a thread to the message whose timestamp is passed
     * @param {timestamp} [params.postAt] Sets a time for the message to be posted, as a scheduled message
     * @return {Message} An instance of Message
     */

    Message: (params) => getInstance(Message, params),

    /**
     * Creates and returns a Modal Surface
     *
     * {@link https://api.slack.com/reference/surfaces/views|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.title] Sets a title for your Modal
     * @param {string} [params.close] Sets the text for the close button
     * @param {string} [params.submit] Sets the text for the submit button
     * @param {string} [params.callbackId] Sets a string sent back to your server together with all action and submission events.
     * @param {string} [params.externalId] Sets a custom identifier that must be unique for all views on a per-team basis
     * @param {string} [params.privateMetaData] Sets a string sent back to your server together with all action and submission events.
     * @return {Modal} An instance of Modal
     */

    Modal: (params) => getInstance(Modal, params),

    /**
     * Creates and returns a WorkflowStep Surface
     *
     * {@link https://api.slack.com/reference/surfaces/views|View in Slack API Documentation}
     *
     * @param {Object} [params] Constructor parameters
     * @param {string} [params.callbackId] Sets a string sent back to your server together with all action and submission events.
     * @param {string} [params.privateMetaData] Sets a string sent back to your server together with all action and submission events.
     * @return {WorkflowStep} An instance of WorkflowStep
     */

    WorkflowStep: (params) => getInstance(WorkflowStep, params),
  };
};

module.exports = {
  HomeTab,
  Message,
  Modal,
  WorkflowStep,
  SurfaceDto,
  getSurfaces,
};
