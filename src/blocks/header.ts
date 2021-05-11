import { BlockBuilder } from '../base';
import { BlockSlackDto } from '../lib';
import {
  BlockId,
  End,
  Text,
  Build,
} from '../methods';
import { applyMixins, getPlainTextObject } from '../helpers';
import { BlockType } from '../constants';

export interface HeaderParams {
  blockId?: string;
  text?: string;
}

export interface HeaderBuilder extends BlockId,
  End,
  Text,
  Build {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#header
 * @@displayName Header
 */

export class HeaderBuilder extends BlockBuilder<HeaderParams> {
  /** @internal */

  public build(): BlockSlackDto {
    return this.getResult(BlockSlackDto, {
      type: BlockType.Header,
      text: getPlainTextObject(this.props.text),
    });
  }
}

applyMixins(HeaderBuilder, [
  BlockId,
  End,
  Text,
]);
