import { SurfaceBuilderBase } from '../base';
import { SlackHomeTabDto } from '../lib';
import {
  Blocks,
  CallbackId,
  ExternalId,
  PrivateMetaData,
  BuildToJSON,
  BuildToObject,
  GetBlocks,
  GetPreviewUrl,
  PrintPreviewUrl,
} from '../methods';
import { applyMixins, getBuilderResults } from '../helpers';
import { SurfaceType } from '../constants';

import type { SlackBlockDto } from '../lib';
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
  BuildToObject<SlackHomeTabDto>,
  GetBlocks,
  GetPreviewUrl,
  PrintPreviewUrl {
}

/**
 * @@link https://api.slack.com/reference/surfaces/views
 * @@displayName Home Tab
 */

export class HomeTabBuilder extends SurfaceBuilderBase {
  /** @internal */

  public build(): Readonly<SlackHomeTabDto> {
    return this.getResult(SlackHomeTabDto, {
      type: SurfaceType.HomeTab,
      blocks: getBuilderResults<SlackBlockDto>(this.props.blocks),
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
  GetPreviewUrl,
  PrintPreviewUrl,
]);
