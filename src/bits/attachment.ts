import { BitBuilder } from '../base';
import { SlackDto } from '../lib';
import {
  HasBlocks,
  HasColor,
  HasEnd,
  HasFallback,
  MustBuild,
} from '../methods';
import { applyMixins, getBuilderResults } from '../helpers';

import type { BlockBuilder } from '../types';

export interface AttachmentParams {
  color?: string;
  fallback?: string;
}

export interface AttachmentBuilder extends HasBlocks<BlockBuilder>,
  HasColor,
  HasEnd,
  HasFallback,
  MustBuild {
}

/**
 * @@link https://api.slack.com/reference/messaging/attachments
 * @@displayName Attachment
 */

export class AttachmentBuilder extends BitBuilder<AttachmentParams> {
  /** @internal */

  public build(): SlackDto {
    return this.getResult(SlackDto, {
      blocks: getBuilderResults(this.props.blocks),
    });
  }
}

applyMixins(AttachmentBuilder, [
  HasBlocks,
  HasColor,
  HasEnd,
  HasFallback,
]);
