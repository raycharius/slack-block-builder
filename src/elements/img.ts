import { ElementBuilder } from '../base';
import { ElementSlackDto } from '../lib';
import {
  HasAltText,
  HasImageUrl,
  HasEnd,
  MustBuild,
} from '../methods';
import { applyMixins } from '../helpers';
import { ElementType } from '../constants';

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
  /** @internal */

  public build(): ElementSlackDto {
    return this.getResult(ElementSlackDto, {
      type: ElementType.Image,
    });
  }
}

applyMixins(ImgBuilder, [
  HasAltText,
  HasImageUrl,
  HasEnd,
]);
