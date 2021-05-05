import { BlockBase } from '../base';
import { SlackDto } from '../lib';
import {
  HasBlockId,
  HasEnd,
  HasText,
  MustBuild,
} from '../methods';
import { applyMixins, getPlainTextObject } from '../helpers';
import { BlockType } from '../constants';

export interface HeaderParams {
  blockId?: string;
  text?: string;
}

export interface HeaderBlock extends HasBlockId,
  HasEnd,
  HasText,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/blocks#header}
 */

export class HeaderBlock extends BlockBase implements HeaderBlock {
  constructor(params?: HeaderParams) {
    super(params);

    this.props.type = BlockType.Header;
  }

  public build(): SlackDto {
    const augmentedProps = {
      text: getPlainTextObject(this.props.text),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(HeaderBlock, [
  HasBlockId,
  HasEnd,
  HasText,
]);
