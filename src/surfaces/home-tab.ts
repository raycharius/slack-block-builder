import { SurfaceBuilder } from '../base';
import { SlackDto } from '../lib';
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

import type { ViewBlockBuilder } from '../types';

export interface HomeTabParams {
  privateMetaData?: string;
  callbackId?: string;
  externalId?: string;
}

export interface HomeTabBuilder extends CanBuildToJSON,
  CanBuildToObject,
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
  public build(): SlackDto {
    const augmentedProps = {
      blocks: getBuilderResults(this.props.blocks),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
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
