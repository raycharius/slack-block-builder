import { BlockBuilderBase } from '../base';
import { SlackBlockDto } from '../lib';
import {
  BlockId,
  Elements,
  End,
  Build,
} from '../methods';
import { applyMixins, getBuilderResults } from '../helpers';
import { BlockType } from '../constants/block-types';

import type { ActionsElementBuilder } from '../types';

export interface ActionsParams {
  blockId?: string;
}

export interface ActionsBuilder extends BlockId,
  End,
  Elements<ActionsElementBuilder>,
  Build {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#actions
 * @@displayName Actions
 */

export class ActionsBuilder extends BlockBuilderBase<ActionsParams> {
  /** @internal */

  public build(): SlackBlockDto {
    return this.getResult(SlackBlockDto, {
      type: BlockType.Actions,
      elements: getBuilderResults(this.props.elements),
    });
  }
}

applyMixins(ActionsBuilder, [
  BlockId,
  End,
  Elements,
]);
