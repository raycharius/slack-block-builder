import { BlockBuilderBase } from '../internal/base';
import { BlockType } from '../internal/constants';
import { SlackBlockDto } from '../internal/dto';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../internal/helpers';
import {
  BlockId,
  DispatchAction,
  Element,
  End,
  Hint,
  Label,
  Optional,
} from '../internal/methods';

import type { SlackElementDto } from '../internal/dto';
import type { InputElementBuilder } from '../internal/types';

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
 * @@link https://docs.slack.dev/reference/block-kit/blocks/input-block
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
