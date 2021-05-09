import { ElementBuilder } from '../base';
import { SlackDto } from '../lib';
import {
  HasAltText,
  HasImageUrl,
  HasEnd,
  MustBuild,
} from '../methods';
import { applyMixins } from '../helpers';

export interface ImgParams {
  imageUrl?: string;
  altText?: string;
}

export interface ImgBuilder extends HasAltText,
  HasImageUrl,
  HasEnd,
  MustBuild {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#image
 * @@displayName Image
 */

export class ImgBuilder extends ElementBuilder<ImgParams> {
  public build(): SlackDto {
    return this.getResult(SlackDto);
  }
}

applyMixins(ImgBuilder, [
  HasAltText,
  HasImageUrl,
  HasEnd,
]);
