import { BlockBuilderBase } from '../internal/base';
import { BlockType } from '../internal/constants';
import { SlackBlockDto } from '../internal/dto';
import { applyMixins, getPlainTextObject } from '../internal/helpers';
import {
  AltText,
  AuthorName,
  BlockId,
  Description,
  End,
  ProviderIconUrl,
  ProviderName,
  ThumbnailUrl,
  Title,
  TitleUrl,
  VideoUrl,
} from '../internal/methods';

export interface VideoParams {
  blockId?: string;
  description?: string;
  providerIconUrl?: string;
  providerName?: string;
  thumbnailUrl?: string;
  title?: string;
  titleUrl?: string;
  videoUrl?: string;
}

export interface VideoBuilder extends AltText,
  AuthorName,
  BlockId,
  Description,
  End,
  ProviderIconUrl,
  ProviderName,
  ThumbnailUrl,
  Title,
  TitleUrl,
  VideoUrl {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#video
 * @@displayName Video
 */

export class VideoBuilder extends BlockBuilderBase {
  /** @internal */

  build(): Readonly<SlackBlockDto> {
    return this.getResult(SlackBlockDto, {
      type: BlockType.Video,
      description: getPlainTextObject(this.props.description),
      title: getPlainTextObject(this.props.title),
    });
  }
}

applyMixins(VideoBuilder, [
  AltText,
  AuthorName,
  BlockId,
  Description,
  End,
  ProviderIconUrl,
  ProviderName,
  ThumbnailUrl,
  Title,
  TitleUrl,
  VideoUrl,
]);
