import { SurfaceBuilderBase } from '../base';
import { SlackViewDto } from '../lib';
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
} from '../methods';
import { applyMixins, getPlainTextObject, getBuilderResults } from '../helpers';
import { SurfaceType } from '../constants';

import type { SlackBlockDto } from '../lib';
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
  BuildToObject<SlackViewDto>,
  GetBlocks,
  PrintPreviewUrl {
}

/**
 * @@link https://api.slack.com/reference/surfaces/views
 * @@displayName Modal
 */

export class ModalBuilder extends SurfaceBuilderBase {
  /** @internal */

  public build(): SlackViewDto {
    return this.getResult(SlackViewDto, {
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
  PrintPreviewUrl,
]);
