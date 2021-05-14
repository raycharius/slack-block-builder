import { SurfaceBuilderBase } from '../base';
import { SlackMessageDto } from '../lib';
import {
  AsUser,
  Attachments,
  Blocks,
  Channel,
  DeleteOriginal,
  Ephemeral,
  IgnoreMarkdown,
  InChannel,
  PostAt,
  ReplaceOriginal,
  Text,
  ThreadTs,
  Ts,
  BuildToJSON,
  BuildToObject,
  GetAttachments,
  GetBlocks,
  PrintPreviewUrl,
  Build,
} from '../methods';
import { applyMixins, getBuilderResults } from '../helpers';

import type { BlockBuilder } from '../types';

export interface MessageParams {
  channel?: string;
  postAt?: number;
  text?: string;
  threadTs?: string;
  ts?: string;
}

export interface MessageBuilder extends AsUser,
  Attachments,
  Blocks<BlockBuilder>,
  Channel,
  DeleteOriginal,
  Ephemeral,
  IgnoreMarkdown,
  InChannel,
  PostAt,
  ReplaceOriginal,
  Text,
  ThreadTs,
  Ts,
  BuildToJSON,
  BuildToObject<SlackMessageDto>,
  GetAttachments,
  GetBlocks,
  PrintPreviewUrl,
  Build {
}

/**
 * @@link https://api.slack.com/messaging/composing
 * @@displayName Message
 */

export class MessageBuilder extends SurfaceBuilderBase<MessageParams> {
  /** @internal */

  public build(): SlackMessageDto {
    return this.getResult(SlackMessageDto, {
      blocks: getBuilderResults(this.props.blocks),
      attachments: getBuilderResults(this.props.attachments),
    });
  }
}

applyMixins(MessageBuilder, [
  AsUser,
  Attachments,
  Blocks,
  Channel,
  DeleteOriginal,
  Ephemeral,
  IgnoreMarkdown,
  InChannel,
  PostAt,
  ReplaceOriginal,
  Text,
  ThreadTs,
  Ts,
  BuildToJSON,
  BuildToObject,
  GetAttachments,
  GetBlocks,
  PrintPreviewUrl,
]);
