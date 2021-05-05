import { SurfaceBase } from '../base';
import { SlackDto } from '../lib';
import {
  CanBuildToJSON,
  CanBuildToObject,
  CanGetBlocks,
  CanPrintPreviewUrl,
  HasBlocks,
  HasCallbackId,
  HasClearOnClose,
  HasClose,
  HasExternalId,
  HasNotifyOnClose,
  HasPrivateMetaData,
  HasSubmit,
  HasTitle,
  MustBuild,
} from '../methods';
import { applyMixins, getPlainTextObject, getBuilderResults } from '../helpers';
import { SurfaceType } from '../constants';

import type { ViewBlock } from '../types';

export interface ModalParams {
  type?: string;
  title?: string;
  close?: string;
  submit?: string;
  privateMetaData?: string;
  callbackId?: string;
  externalId?: string;
}

export interface ModalSurface extends CanBuildToJSON,
  CanBuildToObject,
  CanGetBlocks,
  CanPrintPreviewUrl,
  HasBlocks<ViewBlock>,
  HasCallbackId,
  HasClearOnClose,
  HasClose,
  HasExternalId,
  HasNotifyOnClose,
  HasPrivateMetaData,
  HasSubmit,
  HasTitle,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/surfaces/views}
 */

export class ModalSurface extends SurfaceBase implements ModalSurface {
  constructor(params?: ModalParams) {
    super(params);

    this.props.type = SurfaceType.Modal;
  }

  build(): SlackDto {
    const augmentedProps = {
      title: getPlainTextObject(this.props.title),
      blocks: getBuilderResults(this.props.blocks),
      close: getPlainTextObject(this.props.close),
      submit: getPlainTextObject(this.props.submit),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(ModalSurface, [
  CanBuildToJSON,
  CanBuildToObject,
  CanGetBlocks,
  CanPrintPreviewUrl,
  HasBlocks,
  HasCallbackId,
  HasClearOnClose,
  HasClose,
  HasExternalId,
  HasNotifyOnClose,
  HasPrivateMetaData,
  HasSubmit,
  HasTitle,
]);
