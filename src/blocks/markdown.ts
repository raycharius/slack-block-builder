import { BlockBuilderBase } from '../internal/base';
import { BlockType } from '../internal/constants';
import { SlackBlockDto } from '../internal/dto';
import { applyMixins } from '../internal/helpers';
import {
    BlockId,
    End,
    Text,
} from '../internal/methods';

export interface MarkdownParams {
    blockId?: string;
    text?: string;
}

export interface MarkdownBuilder extends BlockId,
    End,
    Text {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/blocks/markdown-block
 * @@displayName Markdown
 */

export class MarkdownBuilder extends BlockBuilderBase {
    /** @internal */

    public build(): Readonly<SlackBlockDto> {
        return this.getResult(SlackBlockDto, {
            type: BlockType.Markdown,
            text: this.props.text,
        });
    }
}

applyMixins(MarkdownBuilder, [
    BlockId,
    End,
    Text,
]);

