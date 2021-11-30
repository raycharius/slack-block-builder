import { BlockBuilderBase } from '../internal/base';
import { BlockType } from '../internal/constants';
import { SlackBlockDto } from '../internal/dto';
import {
  applyMixins,
  getMarkdownObject,
  getBuilderResult,
  getFields,
} from '../internal/helpers';
import {
  Accessory,
  BlockId,
  End,
  Fields,
  Text,
} from '../internal/methods';

import type { SlackElementDto } from '../internal/dto';

export interface SectionParams {
  blockId?: string;
  text?: string;
}

export interface SectionBuilder extends Accessory,
  BlockId,
  End,
  Fields,
  Text {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#section
 * @@displayName Section
 */

export class SectionBuilder extends BlockBuilderBase {
  /** @internal */

  public build(): Readonly<SlackBlockDto> {
    return this.getResult(SlackBlockDto, {
      type: BlockType.Section,
      text: getMarkdownObject(this.props.text),
      fields: getFields(this.props.fields),
      accessory: getBuilderResult<SlackElementDto>(this.props.accessory),
    });
  }
}

applyMixins(SectionBuilder, [
  Accessory,
  BlockId,
  End,
  Fields,
  Text,
]);
