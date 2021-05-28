import { BlockBuilderBase } from '../base';
import { SlackBlockDto } from '../lib';
import {
  Accessory,
  BlockId,
  End,
  Fields,
  Text,
} from '../methods';
import {
  applyMixins,
  getMarkdownObject,
  getBuilderResult,
  getFields,
} from '../helpers';
import { BlockType } from '../constants';

import type { SlackElementDto } from '../lib';

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
