import { SurfaceBuilder } from '../base';
import { ViewSlackDto } from '../lib';
import {
  CanBuildToJSON,
  CanBuildToObject,
  CanGetBlocks,
  CanPrintPreviewUrl,
  HasBlocks,
  HasCallbackId,
  HasExternalId,
  HasPrivateMetaData,
  MustBuild,
} from '../methods';
import { applyMixins, getBuilderResults } from '../helpers';
import { SurfaceType } from '../constants';

import type { ViewBlockBuilder } from '../types';

export interface HomeTabParams {
  privateMetaData?: string;
  callbackId?: string;
  externalId?: string;
}

export interface HomeTabBuilder extends CanBuildToJSON,
  CanBuildToObject<ViewSlackDto>,
  CanGetBlocks,
  CanPrintPreviewUrl,
  HasBlocks<ViewBlockBuilder>,
  HasCallbackId,
  HasExternalId,
  HasPrivateMetaData,
  MustBuild {
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
  CanBuildToJSON,
  CanBuildToObject,
  CanGetBlocks,
  CanPrintPreviewUrl,
  HasBlocks,
  HasCallbackId,
  HasExternalId,
  HasPrivateMetaData,
]);
