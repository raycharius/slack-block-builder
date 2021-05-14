import { BlockBuilderBase } from '../base';
import { SlackBlockDto } from '../lib';
import {
  BlockId,
  Elements,
  End,
  Build,
} from '../methods';
import { applyMixins, getElementsForContext } from '../helpers';
import { BlockType } from '../constants/block-types';

import type { ContextElementBuilder } from '../types';

export interface ContextParams {
  blockId?: string;
}

export interface ContextBuilder extends BlockId,
  Elements<ContextElementBuilder>,
  End,
  Build {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#context
 * @@displayName Context
 */

export class ContextBuilder extends BlockBuilderBase<ContextParams> {
  /** @internal */

  public build(): SlackBlockDto {
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
