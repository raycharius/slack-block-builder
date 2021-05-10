import { BlockBuilder } from '../base';
import { SlackDto } from '../lib';
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

  public build(): SlackDto {
    const augmentedProps = {
      text: getPlainTextObject(this.props.text),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(HeaderBuilder, [
  HasBlockId,
  HasEnd,
  HasText,
]);
