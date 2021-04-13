import { BlockBase } from '../base';
import { SlackDto } from '../lib';
import {
  HasBlockId,
  HasElements,
  HasEnd,
  MustBuild,
} from '../methods';
import { applyMixins, getBuilderResults } from '../helpers';
import { objectTypes } from '../constants';

export interface ActionsParams {
  blockId?: string;
}

export interface ActionsBlock extends HasBlockId,
  HasEnd,
  HasElements,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/blocks#actions}
 */

export class ActionsBlock extends BlockBase implements ActionsBlock {
  constructor(params?: ActionsParams) {
    super(params);

    this.props.type = objectTypes.blocks.actions;
  }

  public build(): SlackDto {
    const augmentedProps = {
      elements: getBuilderResults(this.props.elements),
    };

    return this.getResult(SlackDto, augmentedProps);
  }
}

applyMixins(ActionsBlock, [
  HasBlockId,
  HasEnd,
  HasElements,
]);
