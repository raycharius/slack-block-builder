import { BlockBuilder } from '../base';
import { BlockSlackDto } from '../lib';
import {
  HasBlockId,
  HasDispatchAction,
  HasElement,
  HasEnd,
  HasHint,
  HasLabel,
  HasOptional,
  MustBuild,
} from '../methods';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../helpers';

import type { InputElementBuilder } from '../types';

export interface InputParams {
  blockId?: string;
  hint?: string;
  label?: string;
}

export interface InputBuilder extends HasBlockId,
  HasDispatchAction,
  HasElement<InputElementBuilder>,
  HasEnd,
  HasHint,
  HasLabel,
  HasOptional,
  MustBuild {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#input
 * @@displayName Input
 */

export class InputBuilder extends BlockBuilder<InputParams> {
  /** @internal */

  public build(): BlockSlackDto {
    const augmentedProps = {
      label: getPlainTextObject(this.props.label),
      hint: getPlainTextObject(this.props.hint),
      element: getBuilderResult(this.props.element),
    };

    return this.getResult(BlockSlackDto, augmentedProps);
  }
}

applyMixins(InputBuilder, [
  HasBlockId,
  HasDispatchAction,
  HasElement,
  HasEnd,
  HasHint,
  HasLabel,
  HasOptional,
]);
