import { ElementBuilderBase } from '../internal/base';
import { ElementType } from '../internal/constants';
import { SlackElementDto } from '../internal/dto';
import { applyMixins, getPlainTextObject } from '../internal/helpers';
import {
    ActionId,
    End,
} from '../internal/methods';

interface FeedbackButtonConfig {
    text: string;
    value: string;
    accessibilityLabel?: string;
}

export interface FeedbackButtonsParams {
    actionId?: string;
}

export interface FeedbackButtonsBuilder extends ActionId,
    End {
    positiveButton(config: FeedbackButtonConfig): this;
    negativeButton(config: FeedbackButtonConfig): this;
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/feedback-buttons-element
 * @@displayName Feedback Buttons
 */

export class FeedbackButtonsBuilder extends ElementBuilderBase {
    /** @internal */

    /**
     * @description Sets the positive feedback button configuration.
     * @param {FeedbackButtonConfig} config - Button configuration with text, value, and optional accessibility label.
     */
    public positiveButton(config: FeedbackButtonConfig): this {
        this.props.positiveButton = {
            text: getPlainTextObject(config.text),
            value: config.value,
            accessibility_label: config.accessibilityLabel,
        };
        return this;
    }

    /**
     * @description Sets the negative feedback button configuration.
     * @param {FeedbackButtonConfig} config - Button configuration with text, value, and optional accessibility label.
     */
    public negativeButton(config: FeedbackButtonConfig): this {
        this.props.negativeButton = {
            text: getPlainTextObject(config.text),
            value: config.value,
            accessibility_label: config.accessibilityLabel,
        };
        return this;
    }

    public build(): Readonly<SlackElementDto> {
        return this.getResult(SlackElementDto, {
            type: ElementType.FeedbackButtons,
            positive_button: this.props.positiveButton,
            negative_button: this.props.negativeButton,
        });
    }
}

applyMixins(FeedbackButtonsBuilder, [
    ActionId,
    End,
]);
