import { BlockBuilderBase } from '../base';
import { SlackBlockDto } from '../lib';
import {
  BlockId,
  DispatchAction,
  Element,
  End,
  Hint,
  Label,
  Optional,
} from '../methods';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../helpers';
import { BlockType } from '../constants';

import type { SlackElementDto } from '../lib';
import type { InputElementBuilder } from '../types';

export interface InputParams {
  blockId?: string;
  hint?: string;
  label?: string;
}

export interface InputBuilder extends BlockId,
  DispatchAction,
  Element<InputElementBuilder>,
  End,
  Hint,
  Label,
  Optional {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#input
 * @@displayName Input
 */

export class InputBuilder extends BlockBuilderBase {
  /** @internal */

  public build(): Readonly<SlackBlockDto> {
    return this.getResult(SlackBlockDto, {
      type: BlockType.Input,
      label: getPlainTextObject(this.props.label),
      hint: getPlainTextObject(this.props.hint),
      element: getBuilderResult<SlackElementDto>(this.props.element),
    });
  }
}

applyMixins(InputBuilder, [
  BlockId,
  DispatchAction,
  Element,
  End,
  Hint,
  Label,
  Optional,
]);
