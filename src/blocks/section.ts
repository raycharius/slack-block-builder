import { BlockBuilderBase } from '../internal/base';
import { BlockType } from '../internal/constants';
import { SlackBlockDto } from '../internal/dto';
import {
  applyMixins,
  getBuilderResult,
  getFields,
  getTextObject,
} from '../internal/helpers';
import {
  Accessory,
  BlockId,
  End,
  Fields,
  Text,
  TextAttributes,
} from '../internal/methods';

import type { SlackElementDto } from '../internal/dto';
import { TextAttributesType } from '../internal/objects/text-attributes-object';

export interface SectionParams {
  blockId?: string;
  text?: string;
  textAttributes?: TextAttributesType;
}

export interface SectionBuilder
  extends Accessory,
  BlockId,
  End,
  Fields,
  Text,
  TextAttributes {}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#section
 * @@displayName Section
 */

export class SectionBuilder extends BlockBuilderBase {
  /** @internal */

  public build(): Readonly<SlackBlockDto> {
    return this.getResult(SlackBlockDto, {
      type: BlockType.Section,
      text: getTextObject(this.props.text, this.props.textAttributes),
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
  TextAttributes,
]);
