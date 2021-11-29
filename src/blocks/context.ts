import {
  applyMixins,
  getElementsForContext,
  BlockBuilderBase,
  SlackBlockDto,
} from '../lib';
import {
  BlockId,
  Elements,
  End,
} from '../methods';
import { BlockType } from '../constants';

import type { ContextElement } from '../types';

export interface ContextParams {
  blockId?: string;
}

export interface ContextBuilder extends BlockId,
  Elements<ContextElement>,
  End {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#context
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
