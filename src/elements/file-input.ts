import { ElementBuilderBase } from '../internal/base';
import { ElementType } from '../internal/constants';
import { SlackElementDto } from '../internal/dto';
import { applyMixins } from '../internal/helpers';
import {
  ActionId,
  Filetypes,
  MaxFiles,
  End,
} from '../internal/methods';

export interface FileInputParams {
  actionId?: string;
  filetypes?: string[];
  maxFiles?: number;
}

export interface FileInputBuilder extends ActionId,
  Filetypes,
  MaxFiles,
  End {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#file_input
 * @@displayName File Input Builder
 */

export class FileInputBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
    return this.getResult(SlackElementDto, {
      type: ElementType.FileInput,
    });
  }
}

applyMixins(FileInputBuilder, [
  ActionId,
  Filetypes,
  MaxFiles,
  End,
]);
