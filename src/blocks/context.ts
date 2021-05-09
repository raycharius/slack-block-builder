import { BlockBuilder } from '../base';
import { SlackDto } from '../lib';
import {
  HasBlockId,
  HasElements,
  HasEnd,
  MustBuild,
} from '../methods';
import { applyMixins, getElementsForContext } from '../helpers';
import { BlockType } from '../constants';

import type { ContextElementBuilder } from '../types';

export interface ContextParams {
  blockId?: string;
}

export interface ContextBuilder extends HasBlockId,
  HasElements<ContextElementBuilder>,
  HasEnd,
  MustBuild {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#context
 * @@displayName Context
 */

export class ContextBuilder extends BlockBuilder {
  constructor(params?: ContextParams) {
    super(params);

    this.props.type = BlockType.Context;
  }

  public build(): SlackDto {
    const augmentedProps = {
      elements: getElementsForContext(this.props.elements),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(ContextBuilder, [
  HasBlockId,
  HasElements,
  HasEnd,
]);
