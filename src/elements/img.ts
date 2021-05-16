import { ElementBuilderBase } from '../base';
import { SlackElementDto } from '../lib';
import {
  AltText,
  ImageUrl,
  End,
} from '../methods';
import { applyMixins } from '../helpers';
import { ElementType } from '../constants';

export interface ImgParams {
  imageUrl?: string;
  altText?: string;
}

export interface ImgBuilder extends AltText,
  ImageUrl,
  End {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#image
 * @@displayName Image
 */

export class ImgBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): SlackElementDto {
    return this.getResult(SlackElementDto, {
      type: ElementType.Image,
    });
  }
}

applyMixins(ImgBuilder, [
  AltText,
  ImageUrl,
  End,
]);
