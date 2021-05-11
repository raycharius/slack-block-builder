import { ElementBuilder } from '../base';
import { ElementSlackDto } from '../lib';
import {
  AltText,
  ImageUrl,
  End,
  Build,
} from '../methods';
import { applyMixins } from '../helpers';
import { ElementType } from '../constants';

export interface ImgParams {
  imageUrl?: string;
  altText?: string;
}

export interface ImgBuilder extends AltText,
  ImageUrl,
  End,
  Build {
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
  AltText,
  ImageUrl,
  End,
]);
