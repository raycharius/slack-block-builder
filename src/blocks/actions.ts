import { BlockBase } from '../base';
import { SlackDto } from '../lib';
import {
  HasBlockId,
  HasElements,
  HasEnd,
  MustBuild,
} from '../methods';
import { applyMixins, getBuilderResults } from '../helpers';
import { BlockType } from '../constants';

import type { ActionsElement } from '../types';

export interface ActionsParams {
  blockId?: string;
}

export interface ActionsBlock extends HasBlockId,
  HasEnd,
  HasElements<ActionsElement>,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/blocks#actions}
 */

export class ActionsBlock extends BlockBase implements ActionsBlock {
  constructor(params?: ActionsParams) {
    super(params);

    this.props.type = BlockType.Actions;
  }

  public build(): SlackDto {
    const augmentedProps = {
      elements: getBuilderResults(this.props.elements),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(ActionsBlock, [
  HasBlockId,
  HasEnd,
  HasElements,
]);