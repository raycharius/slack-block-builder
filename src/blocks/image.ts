import { BlockBuilderBase } from '../internal/base';
import { BlockType } from '../internal/constants';
import { SlackBlockDto } from '../internal/dto';
import { applyMixins, getPlainTextObject } from '../internal/helpers';
import {
  AltText,
  BlockId,
  End,
  ImageUrl,
  Title,
} from '../internal/methods';

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
  Title {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/blocks/image-block
 * @@displayName Image
 */

export class ImageBuilder extends BlockBuilderBase {
  /** @internal */

  public build(): Readonly<SlackBlockDto> {
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
