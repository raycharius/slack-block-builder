import { BlockBuilderBase } from '../base';
import { SlackBlockDto } from '../lib';
import {
  BlockId,
  End,
  Text,
  Build,
} from '../methods';
import { applyMixins, getPlainTextObject } from '../helpers';
import { BlockType } from '../constants/block-types';

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

export class HeaderBuilder extends BlockBuilderBase<HeaderParams> {
  /** @internal */

  public build(): SlackBlockDto {
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
