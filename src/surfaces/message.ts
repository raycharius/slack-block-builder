import { SurfaceBuilder } from '../base';
import { SlackDto } from '../lib';
import {
  CanBuildToJSON,
  CanBuildToObject,
  CanGetAttachments,
  CanGetBlocks,
  CanPrintPreviewUrl,
  HasAsUser,
  HasAttachments,
  HasBlocks,
  HasChannel,
  HasDeleteOriginal,
  HasEphemeral,
  HasIgnoreMarkdown,
  HasInChannel,
  HasPostAt,
  HasReplaceOriginal,
  HasText,
  HasThreadTs,
  HasTs,
  MustBuild,
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

export interface MessageBuilder extends CanBuildToJSON,
  CanBuildToObject,
  CanGetAttachments,
  CanGetBlocks,
  CanPrintPreviewUrl,
  HasAsUser,
  HasAttachments,
  HasBlocks<BlockBuilder>,
  HasChannel,
  HasDeleteOriginal,
  HasEphemeral,
  HasIgnoreMarkdown,
  HasInChannel,
  HasPostAt,
  HasReplaceOriginal,
  HasText,
  HasThreadTs,
  HasTs,
  MustBuild {
}

/**
 * @@link https://api.slack.com/messaging/composing
 * @@displayName Message
 */

export class MessageBuilder extends SurfaceBuilder {
  constructor(params?: MessageParams) {
    super(params);
  }

  public build(): SlackDto {
    const augmentedProps = {
      blocks: getBuilderResults(this.props.blocks),
      attachments: getBuilderResults(this.props.attachments),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(MessageBuilder, [
  CanBuildToJSON,
  CanBuildToObject,
  CanGetAttachments,
  CanGetBlocks,
  CanPrintPreviewUrl,
  HasAsUser,
  HasAttachments,
  HasBlocks,
  HasChannel,
  HasDeleteOriginal,
  HasEphemeral,
  HasIgnoreMarkdown,
  HasInChannel,
  HasPostAt,
  HasReplaceOriginal,
  HasText,
  HasThreadTs,
  HasTs,
]);
