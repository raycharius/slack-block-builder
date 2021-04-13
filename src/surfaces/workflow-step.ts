import { SurfaceBase } from '../base';
import { SlackDto } from '../lib';
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
import { objectTypes } from '../constants';

export interface WorkflowStepParams {
  privateMetaData?: string;
  callbackId?: string;
}

export interface WorkflowStepSurface extends CanBuildToJSON,
  CanBuildToObject,
  CanGetBlocks,
  CanPrintPreviewUrl,
  HasBlocks,
  HasCallbackId,
  HasPrivateMetaData,
  HasSubmitDisabled,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/workflows/configuration-view}
 */

export class WorkflowStepSurface extends SurfaceBase implements WorkflowStepSurface {
  constructor(params?: WorkflowStepParams) {
    super(params);

    this.props.type = objectTypes.surfaces.workflowStep;
  }

  public build(): SlackDto {
    const augmentedProps = {
      title: getPlainTextObject(this.props.title),
      blocks: getBuilderResults(this.props.blocks),
      close: getPlainTextObject(this.props.close),
      submit: getPlainTextObject(this.props.submit),
    };

    return this.getResult(SlackDto, augmentedProps);
  }
}

applyMixins(WorkflowStepSurface, [
  CanBuildToJSON,
  CanBuildToObject,
  CanGetBlocks,
  CanPrintPreviewUrl,
  HasBlocks,
  HasCallbackId,
  HasPrivateMetaData,
  HasSubmitDisabled,
]);
