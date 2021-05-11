import { BlockBuilder } from '../base';
import { BlockSlackDto } from '../lib';
import {
  HasBlockId,
  HasEnd,
  HasExternalId,
  MustBuild,
} from '../methods';
import { applyMixins } from '../helpers';

export interface FileParams {
  blockId?: string;
  externalId?: string;
}

export interface FileBuilder extends HasBlockId,
  HasEnd,
  HasExternalId,
  MustBuild {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#file
 * @@displayName File
 */

export class FileBuilder extends BlockBuilder<FileParams> {
  /** @internal */

  public build(): BlockSlackDto {
    return this.getResult(BlockSlackDto);
  }
}

applyMixins(FileBuilder, [
  HasBlockId,
  HasEnd,
  HasExternalId,
]);
