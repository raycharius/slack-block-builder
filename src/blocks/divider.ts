import { BlockBuilderBase } from '../base';
import { SlackBlockDto } from '../lib';
import { BlockId, End, Build } from '../methods';
import { applyMixins } from '../helpers';
import { BlockType } from '../constants';

export interface DividerParams {
  blockId?: string;
}

export interface DividerBuilder extends BlockId,
  End,
  Build {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#divider
 * @@displayName Divider
 */

export class DividerBuilder extends BlockBuilderBase<DividerParams> {
  /** @internal */

  build(): SlackBlockDto {
    return this.getResult(SlackBlockDto, {
      type: BlockType.Divider,
    });
  }
}

applyMixins(DividerBuilder, [
  BlockId,
  End,
]);
