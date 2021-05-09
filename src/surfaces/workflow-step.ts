import { SurfaceBuilder } from '../base';
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
import { SurfaceType } from '../constants';

import type { ViewBlockBuilder } from '../types';

export interface WorkflowStepParams {
  privateMetaData?: string;
  callbackId?: string;
}

export interface WorkflowStepBuilder extends CanBuildToJSON,
  CanBuildToObject,
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

export class WorkflowStepBuilder extends SurfaceBuilder {
  constructor(params?: WorkflowStepParams) {
    super(params);

    this.props.type = SurfaceType.WorkflowStep;
  }

  public build(): SlackDto {
    const augmentedProps = {
      title: getPlainTextObject(this.props.title),
      blocks: getBuilderResults(this.props.blocks),
      close: getPlainTextObject(this.props.close),
      submit: getPlainTextObject(this.props.submit),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
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
