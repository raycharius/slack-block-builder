import { SurfaceBuilder } from '../base';
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

import type { ViewBlockBuilder } from '../types';

export interface ModalParams {
  type?: string;
  title?: string;
  close?: string;
  submit?: string;
  privateMetaData?: string;
  callbackId?: string;
  externalId?: string;
}

export interface ModalBuilder extends CanBuildToJSON,
  CanBuildToObject,
  CanGetBlocks,
  CanPrintPreviewUrl,
  HasBlocks<ViewBlockBuilder>,
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
 * @@link https://api.slack.com/reference/surfaces/views
 * @@displayName Modal
 */

export class ModalBuilder extends SurfaceBuilder<ModalParams> {
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

applyMixins(ModalBuilder, [
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
