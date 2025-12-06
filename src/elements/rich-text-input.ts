import { ElementBuilderBase } from '../internal/base';
import { ElementType } from '../internal/constants';
import { SlackElementDto } from '../internal/dto';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../internal/helpers';
import {
    ActionId,
    End,
    FocusOnLoad,
    Placeholder,
} from '../internal/methods';

import type { SlackDto } from '../internal/dto';
import type { RichTextBuilder } from '../blocks/rich-text';

interface DispatchActionConfig {
    trigger_actions_on?: ('on_enter_pressed' | 'on_character_entered')[];
}

export interface RichTextInputParams {
    actionId?: string;
    placeholder?: string;
}

export interface RichTextInputBuilder extends ActionId,
    End,
    FocusOnLoad,
    Placeholder {
    initialValue(value: RichTextBuilder): this;
    dispatchActionConfig(config: DispatchActionConfig): this;
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/rich-text-input-element
 * @@displayName Rich Text Input
 */

export class RichTextInputBuilder extends ElementBuilderBase {
    /** @internal */

    /**
     * @description Sets the initial value for the rich text input.
     * @param {RichTextBuilder} value - A RichText block builder with initial content.
     */
    public initialValue(value: RichTextBuilder): this {
        this.props.initialValue = value;
        return this;
    }

    /**
     * @description Configures when to dispatch actions for this input.
     * @param {DispatchActionConfig} config - Configuration for action dispatch triggers.
     */
    public dispatchActionConfig(config: DispatchActionConfig): this {
        this.props.dispatchActionConfig = config;
        return this;
    }

    public build(): Readonly<SlackElementDto> {
        return this.getResult(SlackElementDto, {
            type: ElementType.RichTextInput,
            placeholder: getPlainTextObject(this.props.placeholder),
            initial_value: getBuilderResult<SlackDto>(this.props.initialValue),
            dispatch_action_config: this.props.dispatchActionConfig,
        });
    }
}

applyMixins(RichTextInputBuilder, [
    ActionId,
    End,
    FocusOnLoad,
    Placeholder,
]);
