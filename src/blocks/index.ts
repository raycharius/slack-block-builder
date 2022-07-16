/* eslint-disable max-len */

import { ActionsBuilder, ActionsParams } from './actions';
import { ContextBuilder, ContextParams } from './context';
import { DividerBuilder, DividerParams } from './divider';
import { FileBuilder, FileParams } from './file';
import { HeaderBuilder, HeaderParams } from './header';
import { ImageBuilder, ImageParams } from './image';
import { InputBuilder, InputParams } from './input';
import { SectionBuilder, SectionParams } from './section';
import { VideoBuilder, VideoParams } from './video';

export type {
  ActionsBuilder,
  ActionsParams,
  ContextBuilder,
  ContextParams,
  DividerBuilder,
  DividerParams,
  FileBuilder,
  FileParams,
  HeaderBuilder,
  HeaderParams,
  ImageBuilder,
  ImageParams,
  InputBuilder,
  InputParams,
  SectionBuilder,
  SectionParams,
  VideoBuilder,
  VideoParams,
};

/**
 * Functions here do not use arrow functions stored in variables for IDE color compatibility.
 */

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.blockId] Sets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process.
 *
 * {@link https://api.slack.com/reference/block-kit/blocks#actions|View in Slack API Documentation}
 */

export function Actions(params?: ActionsParams): ActionsBuilder {
  return new ActionsBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.blockId] Sets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process.
 *
 * {@link https://api.slack.com/reference/block-kit/blocks#context|View in Slack API Documentation}
 */

export function Context(params?: ContextParams): ContextBuilder {
  return new ContextBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.blockId] Sets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process.
 *
 * {@link https://api.slack.com/reference/block-kit/blocks#divider|View in Slack API Documentation}
 */

export function Divider(params?: DividerParams): DividerBuilder {
  return new DividerBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.blockId] Sets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process.
 * @param {string} [params.externalId] Sets a custom identifier for the file that must be unique for all images on a per-team basis.
 *
 * {@link https://api.slack.com/reference/block-kit/blocks#file|View in Slack API Documentation}
 */

export function File(params?: FileParams): FileBuilder {
  return new FileBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.blockId] Sets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process.
 * @param {string} [params.text] Sets the text to be displayed in the header block.
 *
 * {@link https://api.slack.com/reference/block-kit/blocks#header|View in Slack API Documentation}
 */

export function Header(params?: HeaderParams): HeaderBuilder {
  return new HeaderBuilder(params);
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

export function Image(params?: ImageParams): ImageBuilder {
  return new ImageBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.blockId] Sets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process.
 * @param {string} [params.label] Sets the label to be displayed above the input.
 * @param {string} [params.hint] Sets the hint to be displayed under the input.
 *
 * {@link https://api.slack.com/reference/block-kit/blocks#input|View in Slack API Documentation}
 */

export function Input(params?: InputParams): InputBuilder {
  return new InputBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.blockId] Sets a string to be an identifier for the block, that will be available in interaction payloadsSets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process.
 * @param {string} [params.text] Sets the text to be displayed in the section block.
 *
 * {@link https://api.slack.com/reference/block-kit/blocks#section|View in Slack API Documentation}
 */

export function Section(params?: SectionParams): SectionBuilder {
  return new SectionBuilder(params);
}

/**
 * @param {Object} [params] Parameters passed to the constructor.
 * @param {string} [params.blockId] Sets a string to be an identifier for the block, that will be available in interaction payloadsSets a string to be an identifier for any given block in a view or message. This is sent back to your app in interaction payloads and view submissions for your app to process.
 * @param {string} [params.description] Sets a description for the video.
 * @param {string} [params.providerIconUrl] Icon for the video provider - ex. YouTube or Vimeo icon.
 * @param {string} [params.providerName] The originating application or domain of the video ex. YouTube or Vimeo.
 * @param {string} [params.thumbnailUrl] A URL that loads the thumbnail image of the video.
 * @param {string} [params.title] Sets the title displayed for the block, element, or confirmation dialog.
 * @param {string} [params.titleUrl] A hyperlink for the video's title text.
 * @param {string} [params.videoUrl] The URL of the video to embed in the Video block.
 *
 * {@link https://api.slack.com/reference/block-kit/blocks#section|View in Slack API Documentation}
 */

export function Video(params?: VideoParams): VideoBuilder {
  return new VideoBuilder(params);
}

const blocks = {
  Actions,
  Context,
  Divider,
  File,
  Header,
  Image,
  Input,
  Section,
  Video,
};

// Strange export. I know. For IDE highlighting purposes.

export { blocks as Blocks };
