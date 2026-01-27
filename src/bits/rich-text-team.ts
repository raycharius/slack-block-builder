import { BitBuilderBase } from '../internal/base';
import { RichTextElementType } from '../internal/constants';
import { SlackDto } from '../internal/dto';
import { applyMixins } from '../internal/helpers';
import { End } from '../internal/methods';

export interface RichTextTeamParams {
    teamId?: string;
}

export interface RichTextTeamBuilder extends End {
    teamId(teamId: string): this;
    bold(): this;
    italic(): this;
    strike(): this;
    code(): this;
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/blocks/rich-text-block
 * @@displayName Rich Text Team
 */

export class RichTextTeamBuilder extends BitBuilderBase {
    /** @internal */

    /**
     * @description Sets the team/workspace ID for the mention.
     * @param {string} teamId - The encoded team ID (e.g., T1234ABCD).
     */
    public teamId(teamId: string): this {
        this.props.teamId = teamId;
        return this;
    }

    /**
     * @description Makes the team mention bold.
     */
    public bold(): this {
        this.props.style = { ...this.props.style, bold: true };
        return this;
    }

    /**
     * @description Makes the team mention italic.
     */
    public italic(): this {
        this.props.style = { ...this.props.style, italic: true };
        return this;
    }

    /**
     * @description Adds strikethrough to the team mention.
     */
    public strike(): this {
        this.props.style = { ...this.props.style, strike: true };
        return this;
    }

    /**
     * @description Formats the team mention as inline code.
     */
    public code(): this {
        this.props.style = { ...this.props.style, code: true };
        return this;
    }

    public build(): Readonly<SlackDto> {
        const result: Record<string, unknown> = {
            type: RichTextElementType.Team,
            teamId: this.props.teamId,
        };

        if (this.props.style && Object.keys(this.props.style).length > 0) {
            result.style = this.props.style;
        }

        return this.getResult(SlackDto, result);
    }
}

applyMixins(RichTextTeamBuilder, [
    End,
]);
