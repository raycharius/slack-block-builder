import { SurfaceBuilderBase } from '../internal/base';
import { SlackMessageDto } from '../internal/dto';
import { applyMixins, getBuilderResults } from '../internal/helpers';
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
  GetPreviewUrl,
  PrintPreviewUrl,
} from '../internal/methods';

import type { SlackBlockDto, SlackDto } from '../internal/dto';
import type { BlockBuilder } from '../internal/types';

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
  GetPreviewUrl,
  PrintPreviewUrl {
}

/**
 * @@link https://docs.slack.dev/messaging/composing
 * @@displayName Message
 */

export class MessageBuilder extends SurfaceBuilderBase {
  /** @internal */

  public build(): Readonly<SlackMessageDto> {
    return this.getResult(SlackMessageDto, {
      blocks: getBuilderResults<SlackBlockDto>(this.props.blocks),
      attachments: getBuilderResults<SlackDto>(this.props.attachments),
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
  GetPreviewUrl,
  PrintPreviewUrl,
]);
