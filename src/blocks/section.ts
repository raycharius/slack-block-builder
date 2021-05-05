import { BlockBase } from '../base';
import { SlackDto } from '../lib';
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

import type { SectionElement } from '../types';

export interface SectionParams {
  blockId?: string;
  text?: string;
}

export interface SectionBlock extends HasAccessory<SectionElement>,
  HasBlockId,
  HasEnd,
  HasFields,
  HasText,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/blocks#section}
 */

export class SectionBlock extends BlockBase implements SectionBlock {
  constructor(params?: SectionParams) {
    super(params);

    this.props.type = BlockType.Section;
  }

  public build(): SlackDto {
    const augmentedProps = {
      text: getMarkdownObject(this.props.text),
      fields: getFields(this.props.fields),
      accessory: getBuilderResult(this.props.accessory),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(SectionBlock, [
  HasAccessory,
  HasBlockId,
  HasEnd,
  HasFields,
  HasText,
]);