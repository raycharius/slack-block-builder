import { BitBuilderBase } from '../internal/base';
import { SlackDto } from '../internal/dto';
import { applyMixins, getTriggerObject } from '../internal/helpers';
import {
  End,
  Trigger,
} from '../internal/methods';
import type { TriggerObject } from '../internal/objects';

export interface WorkflowParams {
  trigger?: TriggerObject;
}

export interface WorkflowBuilder extends End,
  Trigger {
}

/**
 * @@link https://api.slack.com/reference/block-kit/composition-objects#workflow
 * @@displayName Workflow
 */

export class WorkflowBuilder extends BitBuilderBase {
  /** @internal */

  public build(): Readonly<SlackDto> {
    return this.getResult(SlackDto, {
      trigger: getTriggerObject(this.props.trigger),
    });
  }
}

applyMixins(WorkflowBuilder, [
  End,
  Trigger,
]);
