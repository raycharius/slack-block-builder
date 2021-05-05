import { SurfaceBase } from '../base';
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
import { SurfaceType } from '../constants';

import type { ViewBlock } from '../types';

export interface HomeTabParams {
  privateMetaData?: string;
  callbackId?: string;
  externalId?: string;
}

export interface HomeTabSurface extends CanBuildToJSON,
  CanBuildToObject,
  CanGetBlocks,
  CanPrintPreviewUrl,
  HasBlocks<ViewBlock>,
  HasCallbackId,
  HasExternalId,
  HasPrivateMetaData,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/surfaces/views}
 */

export class HomeTabSurface extends SurfaceBase implements HomeTabSurface {
  constructor(params?: HomeTabParams) {
    super(params);

    this.props.type = SurfaceType.HomeTab;
  }

  public build(): SlackDto {
    const augmentedProps = {
      blocks: getBuilderResults(this.props.blocks),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(HomeTabSurface, [
  CanBuildToJSON,
  CanBuildToObject,
  CanGetBlocks,
  CanPrintPreviewUrl,
  HasBlocks,
  HasCallbackId,
  HasExternalId,
  HasPrivateMetaData,
]);