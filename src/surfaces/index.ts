/* eslint-disable max-len */

import { HomeTabSurface, HomeTabParams } from './home-tab';
import { MessageSurface, MessageParams } from './message';
import { ModalSurface, ModalParams } from './modal';
import { WorkflowStepSurface, WorkflowStepParams } from './workflow-step';

/**
 * Functions here do not use arrow functions stored in variables for IDE color compatibility.
 */

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.callbackId] Sets a string sent back to your server together with all action and submission events.
 * @param {string} [params.externalId] Sets a custom identifier that must be unique for all views on a per-team basis.
 * @param {string} [params.privateMetaData] Sets a string sent back to your server together with all action and submission events.
 *
 * {@link https://api.slack.com/surfaces/tabs|View in Slack API Documentation}
 */

export function HomeTab(params?: HomeTabParams): HomeTabSurface {
  return new HomeTabSurface(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.channel] The Slack channel ID to which the message is to be sent.
 * @param {string} [params.text] Text to be displayed in the notification on the Message, or in the body, if there are no Blocks available.
 * @param {timestamp} [params.threadTs] Sets the message to be a reply in a thread to the message whose timestamp is passed.
 * @param {timestamp} [params.postAt] Sets a time for the message to be posted, as a scheduled message.
 *
 * {@link https://api.slack.com/messaging/composing|View in Slack API Documentation}
 */

export function Message(params?: MessageParams): MessageSurface {
  return new MessageSurface(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.title] Sets a title for your modal.
 * @param {string} [params.close] Sets the text for the close button.
 * @param {string} [params.submit] Sets the text for the submit button.
 * @param {string} [params.callbackId] Sets a string sent back to your server together with all action and submission events.
 * @param {string} [params.externalId] Sets a custom identifier that must be unique for all views on a per-team basis.
 * @param {string} [params.privateMetaData] Sets a string sent back to your server together with all action and submission events.
 *
 * {@link https://api.slack.com/reference/surfaces/views|View in Slack API Documentation}
 */

export function Modal(params?: ModalParams): ModalSurface {
  return new ModalSurface(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.callbackId] Sets a string sent back to your server together with all action and submission events.
 * @param {string} [params.privateMetaData] Sets a string sent back to your server together with all action and submission events.
 *
 * {@link https://api.slack.com/reference/surfaces/views|View in Slack API Documentation}
 */

export function WorkflowStep(params?: WorkflowStepParams): WorkflowStepSurface {
  return new WorkflowStepSurface(params);
}

const surfaceObjects = {
  HomeTab,
  Message,
  Modal,
  WorkflowStep,
};

/**
 * Exported in this way so that the color coding in IDEs for this object differs from the functions it contains.
 */

export { surfaceObjects as Surfaces };
