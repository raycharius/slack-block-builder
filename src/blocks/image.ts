import { BlockBase } from '../base';
import { SlackDto } from '../lib';
import {
  HasAltText,
  HasBlockId,
  HasEnd,
  HasImageUrl,
  HasTitle,
  MustBuild,
} from '../methods';
import { applyMixins, getPlainTextObject } from '../helpers';
import { objectTypes } from '../constants';

export interface ImageParams {
  altText?: string;
  blockId?: string;
  imageUrl?: string;
  title?: string;
}

export interface ImageBlock extends HasAltText,
  HasBlockId,
  HasEnd,
  HasImageUrl,
  HasTitle,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/blocks#image}
 */

export class ImageBlock extends BlockBase implements ImageBlock {
  constructor(params?: ImageParams) {
    super(params);

    this.props.type = objectTypes.blocks.image;
  }

  public build(): SlackDto {
    const augmentedProps = {
      title: getPlainTextObject(this.props.title),
    };

    return this.getResult(SlackDto, augmentedProps);
  }
}

applyMixins(ImageBlock, [
  HasAltText,
  HasBlockId,
  HasEnd,
  HasImageUrl,
  HasTitle,
]);
