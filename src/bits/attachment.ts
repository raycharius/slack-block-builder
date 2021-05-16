import { BitBuilderBase } from '../base';
import { SlackDto } from '../lib';
import {
  Blocks,
  Color,
  End,
  Fallback,
} from '../methods';
import { applyMixins, getBuilderResults } from '../helpers';

import type { SlackBlockDto } from '../lib';
import type { BlockBuilder } from '../types';

export interface AttachmentParams {
  color?: string;
  fallback?: string;
}

export interface AttachmentBuilder extends Blocks<BlockBuilder>,
  Color,
  End,
  Fallback {
}

/**
 * @@link https://api.slack.com/reference/messaging/attachments
 * @@displayName Attachment
 */

export class AttachmentBuilder extends BitBuilderBase {
  /** @internal */

  public build(): SlackDto {
    return this.getResult(SlackDto, {
      blocks: getBuilderResults<SlackBlockDto>(this.props.blocks),
    });
  }
}

applyMixins(AttachmentBuilder, [
  Blocks,
  Color,
  End,
  Fallback,
]);
