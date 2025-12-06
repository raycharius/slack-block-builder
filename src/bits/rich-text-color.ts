import { BitBuilderBase } from '../internal/base';
import { RichTextElementType } from '../internal/constants';
import { SlackDto } from '../internal/dto';
import { applyMixins } from '../internal/helpers';
import { End } from '../internal/methods';

export interface RichTextColorParams {
    value?: string;
}

export interface RichTextColorBuilder extends End {
    bold(): this;
    italic(): this;
    strike(): this;
    code(): this;
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/blocks/rich-text-block
 * @@displayName Rich Text Color
 */

export class RichTextColorBuilder extends BitBuilderBase {
    /** @internal */

    /**
     * @description Sets the hex color value.
     * @param {string} value - The hex color value (e.g., '#FF5733').
     */
    public value(value: string): this {
        this.props.value = value;
        return this;
    }

    /**
     * @description Makes the color text bold.
     */
    public bold(): this {
        this.props.style = { ...this.props.style, bold: true };
        return this;
    }

    /**
     * @description Makes the color text italic.
     */
    public italic(): this {
        this.props.style = { ...this.props.style, italic: true };
        return this;
    }

    /**
     * @description Adds strikethrough to the color text.
     */
    public strike(): this {
        this.props.style = { ...this.props.style, strike: true };
        return this;
    }

    /**
     * @description Formats the color text as inline code.
     */
    public code(): this {
        this.props.style = { ...this.props.style, code: true };
        return this;
    }

    public build(): Readonly<SlackDto> {
        const result: Record<string, unknown> = {
            type: RichTextElementType.Color,
            value: this.props.value,
        };

        if (this.props.style && Object.keys(this.props.style).length > 0) {
            result.style = this.props.style;
        }

        return this.getResult(SlackDto, result);
    }
}

applyMixins(RichTextColorBuilder, [
    End,
]);
