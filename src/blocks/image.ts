import { BlockBuilder } from '../base';
import { BlockSlackDto } from '../lib';
import {
  AltText,
  BlockId,
  End,
  ImageUrl,
  Title,
  Build,
} from '../methods';
import { applyMixins, getPlainTextObject } from '../helpers';
import { BlockType } from '../constants';

export interface ImageParams {
  altText?: string;
  blockId?: string;
  imageUrl?: string;
  title?: string;
}

export interface ImageBuilder extends AltText,
  BlockId,
  End,
  ImageUrl,
  Title,
  Build {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#image
 * @@displayName Image
 */

export class ImageBuilder extends BlockBuilder<ImageParams> {
  /** @internal */

  public build(): BlockSlackDto {
    return this.getResult(BlockSlackDto, {
      type: BlockType.Image,
      title: getPlainTextObject(this.props.title),
    });
  }
}

applyMixins(ImageBuilder, [
  AltText,
  BlockId,
  End,
  ImageUrl,
  Title,
]);
