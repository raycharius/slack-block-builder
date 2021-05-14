import { BlockBuilderBase } from '../base';
import { SlackBlockDto } from '../lib';
import {
  AltText,
  BlockId,
  End,
  ImageUrl,
  Title,
  Build,
} from '../methods';
import { applyMixins, getPlainTextObject } from '../helpers';
import { BlockType } from '../constants/block-types';

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

export class ImageBuilder extends BlockBuilderBase<ImageParams> {
  /** @internal */

  public build(): SlackBlockDto {
    return this.getResult(SlackBlockDto, {
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
