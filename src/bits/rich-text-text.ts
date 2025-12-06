import { BitBuilderBase } from '../internal/base';
import { RichTextElementType } from '../internal/constants';
import { SlackDto } from '../internal/dto';
import { applyMixins } from '../internal/helpers';
import { End } from '../internal/methods';

export interface RichTextTextParams {
    text?: string;
}

export interface RichTextTextBuilder extends End {
    bold(): this;
    italic(): this;
    strike(): this;
    code(): this;
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/blocks/rich-text-block
 * @@displayName Rich Text Text
 */

export class RichTextTextBuilder extends BitBuilderBase {
    /** @internal */

    /**
     * @description Makes the text bold.
     */
    public bold(): this {
        this.props.style = { ...this.props.style, bold: true };
        return this;
    }

    /**
     * @description Makes the text italic.
     */
    public italic(): this {
        this.props.style = { ...this.props.style, italic: true };
        return this;
    }

    /**
     * @description Adds strikethrough to the text.
     */
    public strike(): this {
        this.props.style = { ...this.props.style, strike: true };
        return this;
    }

    /**
     * @description Formats the text as inline code.
     */
    public code(): this {
        this.props.style = { ...this.props.style, code: true };
        return this;
    }

    public build(): Readonly<SlackDto> {
        const result: Record<string, unknown> = {
            type: RichTextElementType.Text,
            text: this.props.text,
        };

        if (this.props.style && Object.keys(this.props.style).length > 0) {
            result.style = this.props.style;
        }

        return this.getResult(SlackDto, result);
    }
}

applyMixins(RichTextTextBuilder, [
    End,
]);
