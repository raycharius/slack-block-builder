import { BlockBuilder } from '../base';
import { BlockSlackDto } from '../lib';
import { HasBlockId, HasEnd, MustBuild } from '../methods';
import { applyMixins } from '../helpers';
import { BlockType } from '../constants';

export interface DividerParams {
  blockId?: string;
}

export interface DividerBuilder extends HasBlockId,
  HasEnd,
  MustBuild {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#divider
 * @@displayName Divider
 */

export class DividerBuilder extends BlockBuilder<DividerParams> {
  /** @internal */

  build(): BlockSlackDto {
    return this.getResult(BlockSlackDto, {
      type: BlockType.Divider,
    });
  }
}

applyMixins(DividerBuilder, [
  HasBlockId,
  HasEnd,
]);
