import { BlockBase } from '../base';
import { SlackDto } from '../lib';
import { HasBlockId, HasEnd, MustBuild } from '../methods';
import { applyMixins } from '../helpers';
import { objectTypes } from '../constants';

export interface DividerParams {
  blockId?: string;
}

export interface DividerBlock extends HasBlockId,
  HasEnd,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/blocks#divider}
 */

export class DividerBlock extends BlockBase implements DividerBlock {
  constructor(params?: DividerParams) {
    super(params);

    this.props.type = objectTypes.blocks.divider;
  }

  build(): SlackDto {
    return this.getResult(SlackDto);
  }
}

applyMixins(DividerBlock, [
  HasBlockId,
  HasEnd,
]);
