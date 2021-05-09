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

import type { Block } from '../types';

export interface AttachmentParams {
  color?: string;
  fallback?: string;
}

export interface AttachmentBuilder extends HasBlocks<Block>,
  HasColor,
  HasEnd,
  HasFallback,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/messaging/attachments}
 */

export class AttachmentBuilder extends BitBuilder {
  constructor(params?: AttachmentParams) {
    super(params);
  }

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
