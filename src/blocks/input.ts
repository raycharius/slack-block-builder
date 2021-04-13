import { BlockBase } from '../base';
import { SlackDto } from '../lib';
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
import { objectTypes } from '../constants';

export interface InputParams {
  blockId?: string;
  hint?: string;
  label?: string;
}

export interface InputBlock extends HasBlockId,
  HasDispatchAction,
  HasElement,
  HasEnd,
  HasHint,
  HasLabel,
  HasOptional,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/blocks#input}
 */

export class InputBlock extends BlockBase implements InputBlock {
  constructor(params?: InputParams) {
    super(params);

    this.props.type = objectTypes.blocks.input;
  }

  public build(): SlackDto {
    const augmentedProps = {
      label: getPlainTextObject(this.props.label),
      hint: getPlainTextObject(this.props.hint),
      element: getBuilderResult(this.props.element),
    };

    return this.getResult(SlackDto, augmentedProps);
  }
}

applyMixins(InputBlock, [
  HasBlockId,
  HasDispatchAction,
  HasElement,
  HasEnd,
  HasHint,
  HasLabel,
  HasOptional,
]);
