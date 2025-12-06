import { ElementBuilderBase } from '../internal/base';
import { ElementType } from '../internal/constants';
import { SlackElementDto } from '../internal/dto';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../internal/helpers';
import {
    AccessibilityLabel,
    Danger,
    End,
    Primary,
    Text,
} from '../internal/methods';

import type { SlackDto } from '../internal/dto';
import type { ConfirmationDialogBuilder } from '../bits';

interface WorkflowTrigger {
    url: string;
    customizable_input_parameters?: Array<{
        name: string;
        value: string;
    }>;
}

interface Workflow {
    trigger: WorkflowTrigger;
}

export interface WorkflowButtonParams {
    accessibilityLabel?: string;
    text?: string;
}

export interface WorkflowButtonBuilder extends AccessibilityLabel,
    Danger,
    End,
    Primary,
    Text {
    workflow(workflow: Workflow): this;
    confirm(dialog: ConfirmationDialogBuilder): this;
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/workflow-button-element
 * @@displayName Workflow Button
 */

export class WorkflowButtonBuilder extends ElementBuilderBase {
    /** @internal */

    /**
     * @description Sets the workflow configuration with trigger URL and optional input parameters.
     * @param {Workflow} workflow - The workflow configuration object.
     */
    public workflow(workflow: Workflow): this {
        this.props.workflow = workflow;
        return this;
    }

    /**
     * @description Sets a confirmation dialog to be shown before the workflow is triggered.
     * @param {ConfirmationDialogBuilder} dialog - A ConfirmationDialog builder.
     */
    public confirm(dialog: ConfirmationDialogBuilder): this {
        this.props.confirm = dialog;
        return this;
    }

    public build(): Readonly<SlackElementDto> {
        return this.getResult(SlackElementDto, {
            type: ElementType.WorkflowButton,
            text: getPlainTextObject(this.props.text),
            workflow: this.props.workflow,
            confirm: getBuilderResult<SlackDto>(this.props.confirm),
        });
    }
}

applyMixins(WorkflowButtonBuilder, [
    AccessibilityLabel,
    Danger,
    End,
    Primary,
    Text,
]);
