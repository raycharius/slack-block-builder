import { BlockBuilder } from '../base';
import { BlockSlackDto } from '../lib';
import {
  BlockId,
  End,
  ExternalId,
  Build,
} from '../methods';
import { applyMixins } from '../helpers';
import { BlockType, FileType } from '../constants';

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

export class FileBuilder extends BlockBuilder<FileParams> {
  /** @internal */

  public build(): BlockSlackDto {
    return this.getResult(BlockSlackDto, {
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
