import {
  applyMixins,
  getBuilderResults,
  BlockBuilderBase,
  SlackBlockDto,
} from '../lib';
import {
  BlockId,
  Elements,
  End,
} from '../methods';
import { BlockType } from '../constants';

import type { SlackElementDto } from '../lib';
import type { ActionsElementBuilder } from '../types';

export interface ActionsParams {
  blockId?: string;
}

export interface ActionsBuilder extends BlockId,
  End,
  Elements<ActionsElementBuilder> {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#actions
 * @@displayName Actions
 */

export class ActionsBuilder extends BlockBuilderBase {
  /** @internal */

  public build(): Readonly<SlackBlockDto> {
    return this.getResult(SlackBlockDto, {
      type: BlockType.Actions,
      elements: getBuilderResults<SlackElementDto>(this.props.elements),
    });
  }
}

applyMixins(ActionsBuilder, [
  BlockId,
  End,
  Elements,
]);
