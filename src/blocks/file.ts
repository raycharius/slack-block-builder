import { BlockBuilderBase } from '../base';
import { SlackBlockDto } from '../lib';
import {
  BlockId,
  End,
  ExternalId,
  Build,
} from '../methods';
import { applyMixins } from '../helpers';
import { FileType } from '../constants/file-types';
import { BlockType } from '../constants/block-types';

export interface FileParams {
  blockId?: string;
  externalId?: string;
}

export interface FileBuilder extends BlockId,
  End,
  ExternalId,
  Build {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#file
 * @@displayName File
 */

export class FileBuilder extends BlockBuilderBase<FileParams> {
  /** @internal */

  public build(): SlackBlockDto {
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
