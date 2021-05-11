import { SurfaceBuilder } from '../base';
import { ViewSlackDto } from '../lib';
import {
  CanBuildToJSON,
  CanBuildToObject,
  CanGetBlocks,
  CanPrintPreviewUrl,
  HasBlocks,
  HasCallbackId,
  HasPrivateMetaData,
  HasSubmitDisabled,
  MustBuild,
} from '../methods';
import { applyMixins, getPlainTextObject, getBuilderResults } from '../helpers';
import { SurfaceType } from '../constants';

import type { ViewBlockBuilder } from '../types';

export interface WorkflowStepParams {
  privateMetaData?: string;
  callbackId?: string;
}

export interface WorkflowStepBuilder extends CanBuildToJSON,
  CanBuildToObject<ViewSlackDto>,
  CanGetBlocks,
  CanPrintPreviewUrl,
  HasBlocks<ViewBlockBuilder>,
  HasCallbackId,
  HasPrivateMetaData,
  HasSubmitDisabled,
  MustBuild {
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
  CanBuildToJSON,
  CanBuildToObject,
  CanGetBlocks,
  CanPrintPreviewUrl,
  HasBlocks,
  HasCallbackId,
  HasPrivateMetaData,
  HasSubmitDisabled,
]);
