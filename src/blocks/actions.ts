import { BlockBuilder } from '../base';
import { BlockSlackDto } from '../lib';
import {
  HasBlockId,
  HasElements,
  HasEnd,
  MustBuild,
} from '../methods';
import { applyMixins, getBuilderResults } from '../helpers';
import { BlockType } from '../constants';

import type { ActionsElementBuilder } from '../types';

export interface ActionsParams {
  blockId?: string;
}

export interface ActionsBuilder extends HasBlockId,
  HasEnd,
  HasElements<ActionsElementBuilder>,
  MustBuild {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#actions
 * @@displayName Actions
 */

export class ActionsBuilder extends BlockBuilder<ActionsParams> {
  /** @internal */

  public build(): BlockSlackDto {
    return this.getResult(BlockSlackDto, {
      type: BlockType.Actions,
      elements: getBuilderResults(this.props.elements),
    });
  }
}

applyMixins(ActionsBuilder, [
  HasBlockId,
  HasEnd,
  HasElements,
]);
