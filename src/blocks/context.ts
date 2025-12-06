import { BlockBuilderBase } from '../internal/base';
import { BlockType } from '../internal/constants';
import { SlackBlockDto } from '../internal/dto';
import { applyMixins, getElementsForContext } from '../internal/helpers';
import {
  BlockId,
  Elements,
  End,
} from '../internal/methods';

import type { ContextElement } from '../internal/types';

export interface ContextParams {
  blockId?: string;
}

export interface ContextBuilder extends BlockId,
  Elements<ContextElement>,
  End {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/blocks/context-block
 * @@displayName Context
 */

export class ContextBuilder extends BlockBuilderBase {
  /** @internal */

  public build(): Readonly<SlackBlockDto> {
    return this.getResult(SlackBlockDto, {
      type: BlockType.Context,
      elements: getElementsForContext(this.props.elements),
    });
  }
}

applyMixins(ContextBuilder, [
  BlockId,
  Elements,
  End,
]);
