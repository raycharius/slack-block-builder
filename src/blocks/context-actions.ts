import { BlockBuilderBase } from '../internal/base';
import { BlockType } from '../internal/constants';
import { SlackBlockDto } from '../internal/dto';
import { applyMixins, getBuilderResults } from '../internal/helpers';
import {
    BlockId,
    End,
} from '../internal/methods';

export interface ContextActionsParams {
    blockId?: string;
}

export interface ContextActionsBuilder extends BlockId,
    End {
    elements(...elements: unknown[]): this;
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/blocks/context-actions-block
 * @@displayName Context Actions
 */

export class ContextActionsBuilder extends BlockBuilderBase {
    /** @internal */

    /**
     * @description Adds elements (FeedbackButtons or IconButton) to the context actions block.
     * @param {...unknown[]} elements - FeedbackButtons or IconButton elements.
     */
    public elements(...elements: unknown[]): this {
        this.props.elements = [...(this.props.elements || []), ...elements].flat();
        return this;
    }

    public build(): Readonly<SlackBlockDto> {
        return this.getResult(SlackBlockDto, {
            type: BlockType.ContextActions,
            elements: getBuilderResults(this.props.elements),
        });
    }
}

applyMixins(ContextActionsBuilder, [
    BlockId,
    End,
]);
