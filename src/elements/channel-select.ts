import { ElementBuilder } from '../base';
import { ElementSlackDto } from '../lib';
import {
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialChannel,
  HasPlaceholder,
  HasResponseUrlEnabled,
  MustBuild,
} from '../methods';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../helpers';

import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface ChannelSelectParams {
  actionId?: string;
  initialChannel?: string;
  placeholder?: string;
}

export interface ChannelSelectBuilder extends HasActionId,
  HasConfirm<ConfirmationDialogBuilder>,
  HasEnd,
  HasInitialChannel,
  HasPlaceholder,
  HasResponseUrlEnabled,
  MustBuild {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#channel_select
 * @@displayName Channel Select
 */

export class ChannelSelectBuilder extends ElementBuilder<ChannelSelectParams> {
  public build(): ElementSlackDto {
    const augmentedProps = {
      placeholder: getPlainTextObject(this.props.placeholder),
      confirm: getBuilderResult(this.props.confirm),
    };

    return this.getResult(ElementSlackDto, augmentedProps);
  }
}

applyMixins(ChannelSelectBuilder, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialChannel,
  HasPlaceholder,
  HasResponseUrlEnabled,
]);
