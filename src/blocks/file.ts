import { BlockBuilderBase } from '../base';
import { SlackBlockDto } from '../lib';
import {
  BlockId,
  End,
  ExternalId,
} from '../methods';
import { applyMixins } from '../helpers';
import { BlockType, FileType } from '../constants';

export interface FileParams {
  blockId?: string;
  externalId?: string;
}

export interface FileBuilder extends BlockId,
  End,
  ExternalId {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#file
 * @@displayName File
 */

export class FileBuilder extends BlockBuilderBase {
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
