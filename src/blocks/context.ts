import { BlockBuilder } from '../base';
import { BlockSlackDto } from '../lib';
import {
  BlockId,
  Elements,
  End,
  Build,
} from '../methods';
import { applyMixins, getElementsForContext } from '../helpers';
import { BlockType } from '../constants';

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

export class ContextBuilder extends BlockBuilder<ContextParams> {
  /** @internal */

  public build(): BlockSlackDto {
    return this.getResult(BlockSlackDto, {
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
