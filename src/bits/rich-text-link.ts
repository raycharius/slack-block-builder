import { BitBuilderBase } from '../internal/base';
import { RichTextElementType } from '../internal/constants';
import { SlackDto } from '../internal/dto';
import { applyMixins } from '../internal/helpers';
import { End } from '../internal/methods';

export interface RichTextLinkParams {
    url?: string;
    text?: string;
    unsafe?: boolean;
}

export interface RichTextLinkBuilder extends End {
    bold(): this;
    italic(): this;
    strike(): this;
    code(): this;
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/blocks/rich-text-block
 * @@displayName Rich Text Link
 */

export class RichTextLinkBuilder extends BitBuilderBase {
    /** @internal */

    /**
     * @description Makes the link text bold.
     */
    public bold(): this {
        this.props.style = { ...this.props.style, bold: true };
        return this;
    }

    /**
     * @description Makes the link text italic.
     */
    public italic(): this {
        this.props.style = { ...this.props.style, italic: true };
        return this;
    }

    /**
     * @description Adds strikethrough to the link text.
     */
    public strike(): this {
        this.props.style = { ...this.props.style, strike: true };
        return this;
    }

    /**
     * @description Formats the link text as inline code.
     */
    public code(): this {
        this.props.style = { ...this.props.style, code: true };
        return this;
    }

    public build(): Readonly<SlackDto> {
        const result: Record<string, unknown> = {
            type: RichTextElementType.Link,
            url: this.props.url,
            text: this.props.text,
            unsafe: this.props.unsafe,
        };

        if (this.props.style && Object.keys(this.props.style).length > 0) {
            result.style = this.props.style;
        }

        return this.getResult(SlackDto, result);
    }
}

applyMixins(RichTextLinkBuilder, [
    End,
]);
