import { BitBuilderBase } from '../internal/base';
import { RichTextElementType } from '../internal/constants';
import { SlackDto } from '../internal/dto';
import { applyMixins } from '../internal/helpers';
import { End } from '../internal/methods';

export interface RichTextEmojiParams {
    name?: string;
    unicode?: string;
    url?: string;
}

export interface RichTextEmojiBuilder extends End {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/blocks/rich-text-block
 * @@displayName Rich Text Emoji
 */

export class RichTextEmojiBuilder extends BitBuilderBase {
    /** @internal */

    public build(): Readonly<SlackDto> {
        return this.getResult(SlackDto, {
            type: RichTextElementType.Emoji,
            name: this.props.name,
            unicode: this.props.unicode,
            url: this.props.url,
        });
    }
}

applyMixins(RichTextEmojiBuilder, [
    End,
]);
