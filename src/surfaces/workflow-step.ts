import { SurfaceBuilder } from '../base';
import { ViewSlackDto } from '../lib';
import {
  Blocks,
  CallbackId,
  PrivateMetaData,
  SubmitDisabled,
  BuildToJSON,
  BuildToObject,
  GetBlocks,
  PrintPreviewUrl,
  Build,
} from '../methods';
import { applyMixins, getPlainTextObject, getBuilderResults } from '../helpers';
import { SurfaceType } from '../constants';

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
  BuildToObject<ViewSlackDto>,
  GetBlocks,
  PrintPreviewUrl,
  Build {
}

/**
 * @link https://api.slack.com/reference/workflows/configuration-view
 * @@displayName Workflow Step
 */

export class WorkflowStepBuilder extends SurfaceBuilder<WorkflowStepParams> {
  /** @internal */

  public build(): ViewSlackDto {
    return this.getResult(ViewSlackDto, {
      type: SurfaceType.WorkflowStep,
      title: getPlainTextObject(this.props.title),
      blocks: getBuilderResults(this.props.blocks),
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
  PrintPreviewUrl,
]);
