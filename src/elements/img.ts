import { ElementBase } from '../base';
import { SlackDto } from '../lib';
import {
  HasAltText,
  HasImageUrl,
  HasEnd,
  MustBuild,
} from '../methods';
import { applyMixins } from '../helpers';
import { objectTypes } from '../constants';

export interface ImgParams {
  imageUrl?: string;
  altText?: string;
}

export interface ImgElement extends HasAltText,
  HasImageUrl,
  HasEnd,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/block-elements#image}
 */

export class ImgElement extends ElementBase implements ImgElement {
  constructor(params?: ImgParams) {
    super(params);

    this.props.type = objectTypes.elements.image;
  }

  public build(): SlackDto {
    return this.getResult(SlackDto);
  }
}

applyMixins(ImgElement, [
  HasAltText,
  HasImageUrl,
  HasEnd,
]);
