import { BlockBuilderBase } from '../internal/base';
import { BlockType } from '../internal/constants';
import { SlackBlockDto } from '../internal/dto';
import { applyMixins, getBuilderResults } from '../internal/helpers';
import {
    BlockId,
    Elements,
    End,
} from '../internal/methods';

import type { SlackDto } from '../internal/dto';

export interface RichTextParams {
    blockId?: string;
}

export interface RichTextBuilder extends BlockId,
    End,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Elements<any> {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/blocks/rich-text-block
 * @@displayName Rich Text
 */

export class RichTextBuilder extends BlockBuilderBase {
    /** @internal */

    public build(): Readonly<SlackBlockDto> {
        return this.getResult(SlackBlockDto, {
            type: BlockType.RichText,
            elements: getBuilderResults<SlackDto>(this.props.elements),
        });
    }
}

applyMixins(RichTextBuilder, [
    BlockId,
    End,
    Elements,
]);
