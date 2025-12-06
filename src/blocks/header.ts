import { BlockBuilderBase } from '../internal/base';
import { BlockType } from '../internal/constants';
import { SlackBlockDto } from '../internal/dto';
import { applyMixins, getPlainTextObject } from '../internal/helpers';
import {
  BlockId,
  End,
  Text,
} from '../internal/methods';

export interface HeaderParams {
  blockId?: string;
  text?: string;
}

export interface HeaderBuilder extends BlockId,
  End,
  Text {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/blocks/header-block
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
