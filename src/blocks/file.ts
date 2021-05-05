import { BlockBase } from '../base';
import { SlackDto } from '../lib';
import {
  HasBlockId,
  HasEnd,
  HasExternalId,
  MustBuild,
} from '../methods';
import { applyMixins } from '../helpers';
import { BlockType, FileType } from '../constants';

export interface FileParams {
  blockId?: string;
  externalId?: string;
}

export interface FileBlock extends HasBlockId,
  HasEnd,
  HasExternalId,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/blocks#file}
 */

export class FileBlock extends BlockBase implements FileBlock {
  constructor(params?: FileParams) {
    super(params);

    this.props.type = BlockType.File;
    this.props.source = FileType.Remote;
  }

  public build(): SlackDto {
    return this.getResult(SlackDto);
  }
}

applyMixins(FileBlock, [
  HasBlockId,
  HasEnd,
  HasExternalId,
]);