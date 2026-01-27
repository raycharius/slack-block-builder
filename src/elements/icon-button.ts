import { ElementBuilderBase } from '../internal/base';
import { ElementType } from '../internal/constants';
import { SlackElementDto } from '../internal/dto';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../internal/helpers';
import {
    AccessibilityLabel,
    ActionId,
    End,
    Text,
    Value,
} from '../internal/methods';

import type { SlackDto } from '../internal/dto';
import type { ConfirmationDialogBuilder } from '../bits';

export interface IconButtonParams {
    accessibilityLabel?: string;
    actionId?: string;
    icon?: string;
    text?: string;
    value?: string;
}

export interface IconButtonBuilder extends AccessibilityLabel,
    ActionId,
    End,
    Text,
    Value {
    icon(icon: string): this;
    visibleToUserIds(...userIds: string[]): this;
    confirm(dialog: ConfirmationDialogBuilder): this;
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/icon-button-element
 * @@displayName Icon Button
 */

export class IconButtonBuilder extends ElementBuilderBase {
    /** @internal */

    /**
     * @description Sets the icon to display on the button (e.g., 'trash', 'edit').
     * @param {string} icon - The icon name.
     */
    public icon(icon: string): this {
        this.props.icon = icon;
        return this;
    }

    /**
     * @description Sets user IDs for which the icon appears.
     * @param {...string[]} userIds - User IDs who can see this button.
     */
    public visibleToUserIds(...userIds: string[]): this {
        this.props.visibleToUserIds = userIds.flat();
        return this;
    }

    /**
     * @description Sets a confirmation dialog to be shown before the action is executed.
     * @param {ConfirmationDialogBuilder} dialog - A ConfirmationDialog builder.
     */
    public confirm(dialog: ConfirmationDialogBuilder): this {
        this.props.confirm = dialog;
        return this;
    }

    public build(): Readonly<SlackElementDto> {
        return this.getResult(SlackElementDto, {
            type: ElementType.IconButton,
            icon: this.props.icon,
            text: getPlainTextObject(this.props.text),
            confirm: getBuilderResult<SlackDto>(this.props.confirm),
            visible_to_user_ids: this.props.visibleToUserIds,
        });
    }
}

applyMixins(IconButtonBuilder, [
    AccessibilityLabel,
    ActionId,
    End,
    Text,
    Value,
]);

