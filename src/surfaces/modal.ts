import { SurfaceBuilderBase } from '../internal/base';
import { SurfaceType } from '../internal/constants';
import { SlackModalDto } from '../internal/dto';
import { applyMixins, getPlainTextObject, getBuilderResults } from '../internal/helpers';
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
  GetPreviewUrl,
  PrintPreviewUrl,
} from '../internal/methods';

import type { SlackBlockDto } from '../internal/dto';
import type { ViewBlockBuilder } from '../internal/types';

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
  BuildToObject<SlackModalDto>,
  GetBlocks,
  GetPreviewUrl,
  PrintPreviewUrl {
}

/**
 * @@link https://docs.slack.dev/surfaces/modals
 * @@displayName Modal
 */

export class ModalBuilder extends SurfaceBuilderBase {
  /** @internal */

  public build(): Readonly<SlackModalDto> {
    return this.getResult(SlackModalDto, {
      type: SurfaceType.Modal,
      title: getPlainTextObject(this.props.title),
      blocks: getBuilderResults<SlackBlockDto>(this.props.blocks),
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
  GetPreviewUrl,
  PrintPreviewUrl,
]);
