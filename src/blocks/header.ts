import { BlockBuilder } from '../base';
import { BlockSlackDto } from '../lib';
import {
  HasBlockId,
  HasEnd,
  HasText,
  MustBuild,
} from '../methods';
import { applyMixins, getPlainTextObject } from '../helpers';

export interface HeaderParams {
  blockId?: string;
  text?: string;
}

export interface HeaderBuilder extends HasBlockId,
  HasEnd,
  HasText,
  MustBuild {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#header
 * @@displayName Header
 */

export class HeaderBuilder extends BlockBuilder<HeaderParams> {
  /** @internal */

  public build(): BlockSlackDto {
    const augmentedProps = {
      text: getPlainTextObject(this.props.text),
    };

    return this.getResult(BlockSlackDto, augmentedProps);
  }
}

applyMixins(HeaderBuilder, [
  HasBlockId,
  HasEnd,
  HasText,
]);
