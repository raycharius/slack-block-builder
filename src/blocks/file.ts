import { BlockBuilderBase } from '../internal/base';
import { BlockType, FileType } from '../internal/constants';
import { SlackBlockDto } from '../internal/dto';
import { applyMixins } from '../internal/helpers';
import {
  BlockId,
  End,
  ExternalId,
} from '../internal/methods';

export interface FileParams {
  blockId?: string;
  externalId?: string;
}

export interface FileBuilder extends BlockId,
  End,
  ExternalId {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/blocks/file-block
 * @@displayName File
 */

export class FileBuilder extends BlockBuilderBase {
  /** @internal */

  public build(): Readonly<SlackBlockDto> {
    return this.getResult(SlackBlockDto, {
      type: BlockType.File,
      source: FileType.Remote,
    });
  }
}

applyMixins(FileBuilder, [
  BlockId,
  End,
  ExternalId,
]);
