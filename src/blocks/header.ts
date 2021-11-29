import {
  applyMixins,
  getPlainTextObject,
  BlockBuilderBase,
  SlackBlockDto,
} from '../lib';
import {
  BlockId,
  End,
  Text,
} from '../methods';
import { BlockType } from '../constants';

export interface HeaderParams {
  blockId?: string;
  text?: string;
}

export interface HeaderBuilder extends BlockId,
  End,
  Text {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#header
 * @@displayName Header
 */

export class HeaderBuilder extends BlockBuilderBase {
  /** @internal */

  public build(): Readonly<SlackBlockDto> {
    return this.getResult(SlackBlockDto, {
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
