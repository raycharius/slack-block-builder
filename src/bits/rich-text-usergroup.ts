import { BitBuilderBase } from '../internal/base';
import { RichTextElementType } from '../internal/constants';
import { SlackDto } from '../internal/dto';
import { applyMixins } from '../internal/helpers';
import { End } from '../internal/methods';

export interface RichTextUsergroupParams {
    usergroupId?: string;
}

export interface RichTextUsergroupBuilder extends End {
    bold(): this;
    italic(): this;
    strike(): this;
    code(): this;
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/blocks/rich-text-block
 * @@displayName Rich Text Usergroup Mention
 */

export class RichTextUsergroupBuilder extends BitBuilderBase {
    /** @internal */

    public bold(): this {
        this.props.style = { ...this.props.style, bold: true };
        return this;
    }

    public italic(): this {
        this.props.style = { ...this.props.style, italic: true };
        return this;
    }

    public strike(): this {
        this.props.style = { ...this.props.style, strike: true };
        return this;
    }

    public code(): this {
        this.props.style = { ...this.props.style, code: true };
        return this;
    }

    public build(): Readonly<SlackDto> {
        const result: Record<string, unknown> = {
            type: RichTextElementType.Usergroup,
            usergroupId: this.props.usergroupId,
        };

        if (this.props.style && Object.keys(this.props.style).length > 0) {
            result.style = this.props.style;
        }

        return this.getResult(SlackDto, result);
    }
}

applyMixins(RichTextUsergroupBuilder, [
    End,
]);
