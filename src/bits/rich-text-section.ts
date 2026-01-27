import { BitBuilderBase } from '../internal/base';
import { RichTextElementType } from '../internal/constants';
import { SlackDto } from '../internal/dto';
import { applyMixins, getBuilderResults } from '../internal/helpers';
import {
    Elements,
    End,
} from '../internal/methods';

export interface RichTextSectionParams { }

export interface RichTextSectionBuilder extends End,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Elements<any> {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/blocks/rich-text-block
 * @@displayName Rich Text Section
 */

export class RichTextSectionBuilder extends BitBuilderBase {
    /** @internal */

    public build(): Readonly<SlackDto> {
        return this.getResult(SlackDto, {
            type: RichTextElementType.Section,
            elements: getBuilderResults<SlackDto>(this.props.elements),
        });
    }
}

applyMixins(RichTextSectionBuilder, [
    End,
    Elements,
]);
