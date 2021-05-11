import { SurfaceBuilder } from '../base';
import { ViewSlackDto } from '../lib';
import {
  Blocks,
  CallbackId,
  ClearOnClose,
  Close,
  ExternalId,
  NotifyOnClose,
  PrivateMetaData,
  Submit,
  Title,
  BuildToJSON,
  BuildToObject,
  GetBlocks,
  PrintPreviewUrl,
  Build,
} from '../methods';
import { applyMixins, getPlainTextObject, getBuilderResults } from '../helpers';
import { SurfaceType } from '../constants';

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

export interface ModalBuilder extends Blocks<ViewBlockBuilder>,
  CallbackId,
  ClearOnClose,
  Close,
  ExternalId,
  NotifyOnClose,
  PrivateMetaData,
  Submit,
  Title,
  BuildToJSON,
  BuildToObject<ViewSlackDto>,
  GetBlocks,
  PrintPreviewUrl,
  Build {
}

/**
 * @@link https://api.slack.com/reference/surfaces/views
 * @@displayName Modal
 */

export class ModalBuilder extends SurfaceBuilder<ModalParams> {
  /** @internal */

  public build(): ViewSlackDto {
    return this.getResult(ViewSlackDto, {
      type: SurfaceType.Modal,
      title: getPlainTextObject(this.props.title),
      blocks: getBuilderResults(this.props.blocks),
      close: getPlainTextObject(this.props.close),
      submit: getPlainTextObject(this.props.submit),
    });
  }
}

applyMixins(ModalBuilder, [
  Blocks,
  CallbackId,
  ClearOnClose,
  Close,
  ExternalId,
  NotifyOnClose,
  PrivateMetaData,
  Submit,
  Title,
  BuildToJSON,
  BuildToObject,
  GetBlocks,
  PrintPreviewUrl,
]);
