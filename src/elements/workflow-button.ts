import { ElementBuilderBase } from '../internal/base';
import { ElementType } from '../internal/constants';
import { SlackElementDto } from '../internal/dto';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../internal/helpers';
import {
  AccessibilityLabel,
  ActionId,
  Danger,
  End,
  Primary,
  Text,
  Workflow,
} from '../internal/methods';

export interface WorkflowButtonParams {
  accessibilityLabel?: string;
  actionId?: string;
  text?: string;
}

export interface WorkflowButtonBuilder extends AccessibilityLabel,
  ActionId,
  Danger,
  End,
  Primary,
  Text,
  Workflow {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#workflow_button
 * @@displayName WorkflowButton
 */

export class WorkflowButtonBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
    return this.getResult(SlackElementDto, {
      type: ElementType.WorkflowButton,
      text: getPlainTextObject(this.props.text),
      workflow: getBuilderResult(this.props.workflow),
    });
  }
}

applyMixins(WorkflowButtonBuilder, [
  AccessibilityLabel,
  ActionId,
  Danger,
  End,
  Primary,
  Text,
  Workflow,
]);
