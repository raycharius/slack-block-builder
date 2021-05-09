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
  public build(): SlackDto {
    const augmentedProps = {
      blocks: getBuilderResults(this.props.blocks),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(AttachmentBuilder, [
  HasBlocks,
  HasColor,
  HasEnd,
  HasFallback,
]);
