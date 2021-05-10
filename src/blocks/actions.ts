import { BlockBuilder } from '../base';
import { SlackDto } from '../lib';
import {
  HasBlockId,
  HasElements,
  HasEnd,
  MustBuild,
} from '../methods';
import { applyMixins, getBuilderResults } from '../helpers';

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

  public build(): SlackDto {
    const augmentedProps = {
      elements: getBuilderResults(this.props.elements),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(ActionsBuilder, [
  HasBlockId,
  HasEnd,
  HasElements,
]);
