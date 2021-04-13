import { BlockBase } from '../base';
import { SlackDto } from '../lib';
import {
  HasBlockId,
  HasElementsForContext,
  HasEnd,
  MustBuild,
} from '../methods';
import { applyMixins, getElementsForContext } from '../helpers';
import { objectTypes } from '../constants';

export interface ContextParams {
  blockId?: string;
}

export interface ContextBlock extends HasBlockId,
  HasElementsForContext,
  HasEnd,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/blocks#context}
 */

export class ContextBlock extends BlockBase implements ContextBlock {
  constructor(params?: ContextParams) {
    super(params);

    this.props.type = objectTypes.blocks.context;
  }

  public build(): SlackDto {
    const augmentedProps = {
      elements: getElementsForContext(this.props.elements),
    };

    return this.getResult(SlackDto, augmentedProps);
  }
}

applyMixins(ContextBlock, [
  HasBlockId,
  HasElementsForContext,
  HasEnd,
]);
