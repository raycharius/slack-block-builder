import { ElementBuilderBase } from '../internal/base';
import { ElementType } from '../internal/constants';
import { SlackElementDto } from '../internal/dto';
import { applyMixins } from '../internal/helpers';
import {
  AltText,
  ImageUrl,
  End,
} from '../internal/methods';

export interface ImgParams {
  imageUrl?: string;
  altText?: string;
}

export interface ImgBuilder extends AltText,
  ImageUrl,
  End {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/image-element
 * @@displayName Image
 */

export class ImgBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
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
