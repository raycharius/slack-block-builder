/* eslint-disable max-len */

import { HomeTabBuilder, HomeTabParams } from './home-tab';
import { MessageBuilder, MessageParams } from './message';
import { ModalBuilder, ModalParams } from './modal';
import { WorkflowStepBuilder, WorkflowStepParams } from './workflow-step';

export type {
  HomeTabBuilder,
  HomeTabParams,
  MessageBuilder,
  MessageParams,
  ModalBuilder,
  ModalParams,
  WorkflowStepBuilder,
  WorkflowStepParams,
};

/**
 * Functions here do not use arrow functions stored in variables for IDE color compatibility.
 */

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.callbackId] Sets a string sent back to your server together with all action and submission events.
 * @param {string} [params.externalId] Sets a custom identifier that must be unique for all views on a per-team basis.
 * @param {string} [params.privateMetaData] Sets a string sent back to your server together with all action and submission events.
 *
 * {@link https://docs.slack.dev/surfaces/app-home|View in Slack API Documentation}
 */

export function HomeTab(params?: HomeTabParams): HomeTabBuilder {
  return new HomeTabBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.channel] The Slack channel ID to which the message is to be sent.
 * @param {string} [params.text] Text to be displayed in the notification on the Message, or in the body, if there are no Blocks available.
 * @param {timestamp} [params.threadTs] Sets the message to be a reply in a thread to the message whose timestamp is passed.
 * @param {timestamp} [params.postAt] Sets a time for the message to be posted, as a scheduled message.
 * @param {boolean} [params.unfurlLinks] Sets whether Slack should unfurl links in the Message.
 * @param {boolean} [params.unfurlMedia] Sets whether Slack should unfurl media in the Message.
 *
 * {@link https://docs.slack.dev/messaging/composing|View in Slack API Documentation}
 */

export function Message(params?: MessageParams): MessageBuilder {
  return new MessageBuilder(params);
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
 * {@link https://docs.slack.dev/surfaces/modals|View in Slack API Documentation}
 */

export function Modal(params?: ModalParams): ModalBuilder {
  return new ModalBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.callbackId] Sets a string sent back to your server together with all action and submission events.
 * @param {string} [params.privateMetaData] Sets a string sent back to your server together with all action and submission events.
 *
 * {@link https://docs.slack.dev/surfaces/modals|View in Slack API Documentation}
 */

export function WorkflowStep(params?: WorkflowStepParams): WorkflowStepBuilder {
  return new WorkflowStepBuilder(params);
}

const surfaces = {
  HomeTab,
  Message,
  Modal,
  WorkflowStep,
};

// Strange export. I know. For IDE highlighting purposes.

export { surfaces as Surfaces };
