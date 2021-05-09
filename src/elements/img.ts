import { ElementBase } from '../base';
import { SlackDto } from '../lib';
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
 * {@link https://api.slack.com/reference/block-kit/block-elements#image}
 */

export class ImgBuilder extends ElementBase {
  constructor(params?: ImgParams) {
    super(params);

    this.props.type = ElementType.Image;
  }

  public build(): SlackDto {
    return this.getResult(SlackDto);
  }
}

applyMixins(ImgBuilder, [
  HasAltText,
  HasImageUrl,
  HasEnd,
]);
