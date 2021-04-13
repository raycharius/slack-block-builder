/* eslint-disable max-len */

import { ActionsBlock, ActionsParams } from './actions';
import { ContextBlock, ContextParams } from './context';
import { DividerBlock, DividerParams } from './divider';
import { FileBlock, FileParams } from './file';
import { HeaderBlock, HeaderParams } from './header';
import { ImageBlock, ImageParams } from './image';
import { InputBlock, InputParams } from './input';
import { SectionBlock, SectionParams } from './section';

/**
 * Functions here do not use arrow functions stored in variables for IDE color compatibility.
 */

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.blockId] Sets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process.
 *
 * {@link https://api.slack.com/reference/block-kit/blocks#actions|View in Slack API Documentation}
 */

export function Actions(params?: ActionsParams): ActionsBlock {
  return new ActionsBlock(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.blockId] Sets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process.
 *
 * {@link https://api.slack.com/reference/block-kit/blocks#context|View in Slack API Documentation}
 */

export function Context(params?: ContextParams): ContextBlock {
  return new ContextBlock(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.blockId] Sets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process.
 *
 * {@link https://api.slack.com/reference/block-kit/blocks#divider|View in Slack API Documentation}
 */

export function Divider(params?: DividerParams): DividerBlock {
  return new DividerBlock(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.blockId] Sets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process.
 * @param {string} [params.externalId] Sets a custom identifier for the file that must be unique for all images on a per-team basis.
 *
 * {@link https://api.slack.com/reference/block-kit/blocks#file|View in Slack API Documentation}
 */

export function File(params?: FileParams): FileBlock {
  return new FileBlock(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.blockId] Sets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process.
 * @param {string} [params.text] Sets the text to be displayed in the header block.
 *
 * {@link https://api.slack.com/reference/block-kit/blocks#header|View in Slack API Documentation}
 */

export function Header(params?: HeaderParams): HeaderBlock {
  return new HeaderBlock(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.blockId] Sets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process.
 * @param {string} [params.imageUrl] Sets the source URL from which the image will be loaded.
 * @param {string} [params.altText] Sets a textual summary for the image.
 * @param {string} [params.title] Sets an optional title for the image.
 *
 * {@link https://api.slack.com/reference/block-kit/blocks#image|View in Slack API Documentation}
 */

export function Image(params?: ImageParams): ImageBlock {
  return new ImageBlock(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.blockId] Sets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process.
 * @param {string} [params.label] Sets the label to be displayed above the input.
 * @param {string} [params.hint] Sets the hint to be displayed under the input.
 *
 * {@link https://api.slack.com/reference/block-kit/blocks#input|View in Slack API Documentation}
 */

export function Input(params?: InputParams): InputBlock {
  return new InputBlock(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.blockId] Sets a string to be an identifier for the block, that will be available in interaction payloadsSets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process.
 * @param {string} [params.text] Sets the text to be displayed in the section block.
 *
 * {@link https://api.slack.com/reference/block-kit/blocks#section|View in Slack API Documentation}
 */

export function Section(params?: SectionParams): SectionBlock {
  return new SectionBlock(params);
}

const blockObjects = {
  Actions,
  Context,
  Divider,
  File,
  Header,
  Image,
  Input,
  Section,
};

/**
 * Exported in this way so that the color coding in IDEs for this object differs from the functions it contains.
 */

export { blockObjects as Blocks };
