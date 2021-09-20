import { SurfaceBuilderBase } from '../base';
import { SlackWorkflowStepDto } from '../lib';
import {
  Blocks,
  CallbackId,
  PrivateMetaData,
  SubmitDisabled,
  BuildToJSON,
  BuildToObject,
  GetBlocks,
  GetPreviewUrl,
  PrintPreviewUrl,
} from '../methods';
import { applyMixins, getPlainTextObject, getBuilderResults } from '../helpers';
import { SurfaceType } from '../constants';

import type { SlackBlockDto } from '../lib';
import type { ViewBlockBuilder } from '../types';

export interface WorkflowStepParams {
  privateMetaData?: string;
  callbackId?: string;
}

export interface WorkflowStepBuilder extends Blocks<ViewBlockBuilder>,
  CallbackId,
  PrivateMetaData,
  SubmitDisabled,
  BuildToJSON,
  BuildToObject<SlackWorkflowStepDto>,
  GetBlocks,
  GetPreviewUrl,
  PrintPreviewUrl {
}

/**
 * @@link https://api.slack.com/reference/workflows/configuration-view
 * @@displayName Workflow Step
 */

export class WorkflowStepBuilder extends SurfaceBuilderBase {
  /** @internal */

  public build(): Readonly<SlackWorkflowStepDto> {
    return this.getResult(SlackWorkflowStepDto, {
      type: SurfaceType.WorkflowStep,
      title: getPlainTextObject(this.props.title),
      blocks: getBuilderResults<SlackBlockDto>(this.props.blocks),
      close: getPlainTextObject(this.props.close),
      submit: getPlainTextObject(this.props.submit),
    });
  }
}

applyMixins(WorkflowStepBuilder, [
  Blocks,
  CallbackId,
  PrivateMetaData,
  SubmitDisabled,
  BuildToJSON,
  BuildToObject,
  GetBlocks,
  GetPreviewUrl,
  PrintPreviewUrl,
]);
