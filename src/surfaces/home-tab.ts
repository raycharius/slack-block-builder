import { SurfaceBuilder } from '../base';
import { ViewSlackDto } from '../lib';
import {
  Blocks,
  CallbackId,
  ExternalId,
  PrivateMetaData,
  BuildToJSON,
  BuildToObject,
  GetBlocks,
  PrintPreviewUrl,
  Build,
} from '../methods';
import { applyMixins, getBuilderResults } from '../helpers';
import { SurfaceType } from '../constants';

import type { ViewBlockBuilder } from '../types';

export interface HomeTabParams {
  privateMetaData?: string;
  callbackId?: string;
  externalId?: string;
}

export interface HomeTabBuilder extends Blocks<ViewBlockBuilder>,
  CallbackId,
  ExternalId,
  PrivateMetaData,
  BuildToJSON,
  BuildToObject<ViewSlackDto>,
  GetBlocks,
  PrintPreviewUrl,
  Build {
}

/**
 * @@link https://api.slack.com/reference/surfaces/views
 * @@displayName Home Tab
 */

export class HomeTabBuilder extends SurfaceBuilder<HomeTabParams> {
  /** @internal */

  public build(): ViewSlackDto {
    return this.getResult(ViewSlackDto, {
      type: SurfaceType.HomeTab,
      blocks: getBuilderResults(this.props.blocks),
    });
  }
}

applyMixins(HomeTabBuilder, [
  Blocks,
  CallbackId,
  ExternalId,
  PrivateMetaData,
  BuildToJSON,
  BuildToObject,
  GetBlocks,
  PrintPreviewUrl,
]);
