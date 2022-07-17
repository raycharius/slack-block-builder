import { BlockBuilderBase } from '../internal/base';
import { BlockType } from '../internal/constants';
import { SlackBlockDto } from '../internal/dto';
import { applyMixins } from '../internal/helpers';
import { BlockId, End } from '../internal/methods';

export interface DividerParams {
  blockId?: string;
}

export interface DividerBuilder extends BlockId,
  End {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#divider
 * @@displayName Divider
 */

export class DividerBuilder extends BlockBuilderBase {
  /** @internal */

  public build(): Readonly<SlackBlockDto> {
    return this.getResult(SlackBlockDto, {
      type: BlockType.Divider,
    });
  }
}

applyMixins(DividerBuilder, [
  BlockId,
  End,
]);
