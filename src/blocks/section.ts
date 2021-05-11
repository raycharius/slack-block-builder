import { BlockBuilder } from '../base';
import { BlockSlackDto } from '../lib';
import {
  HasAccessory,
  HasBlockId,
  HasEnd,
  HasFields,
  HasText,
  MustBuild,
} from '../methods';
import {
  applyMixins,
  getMarkdownObject,
  getBuilderResult,
  getFields,
} from '../helpers';
import { BlockType } from '../constants';

import type { SectionElementBuilder } from '../types';

export interface SectionParams {
  blockId?: string;
  text?: string;
}

export interface SectionBuilder extends HasAccessory<SectionElementBuilder>,
  HasBlockId,
  HasEnd,
  HasFields,
  HasText,
  MustBuild {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#section
 * @@displayName Section
 */

export class SectionBuilder extends BlockBuilder<SectionParams> {
  /** @internal */

  public build(): BlockSlackDto {
    return this.getResult(BlockSlackDto, {
      type: BlockType.Section,
      text: getMarkdownObject(this.props.text),
      fields: getFields(this.props.fields),
      accessory: getBuilderResult(this.props.accessory),
    });
  }
}

applyMixins(SectionBuilder, [
  HasAccessory,
  HasBlockId,
  HasEnd,
  HasFields,
  HasText,
]);
