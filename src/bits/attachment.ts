import { BitBuilderBase } from '../internal/base';
import { SlackDto } from '../internal/dto';
import { applyMixins, getBuilderResults } from '../internal/helpers';
import {
  Blocks,
  Color,
  End,
  Fallback,
} from '../internal/methods';

import type { SlackBlockDto } from '../internal/dto';
import type { BlockBuilder } from '../internal/types';

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
 * @@link https://docs.slack.dev/reference/messaging/attachments
 * @@displayName Attachment
 */

export class AttachmentBuilder extends BitBuilderBase {
  /** @internal */

  public build(): Readonly<SlackDto> {
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
