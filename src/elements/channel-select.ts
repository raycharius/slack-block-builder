import { ElementBase } from '../base';
import { SlackDto } from '../lib';
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
import { ElementType } from '../constants';

import type { ConfirmationDialogBit } from '../bits/confirmation-dialog';

export interface ChannelSelectParams {
  actionId?: string;
  initialChannel?: string;
  placeholder?: string;
}

export interface ChannelSelectElement extends HasActionId,
  HasConfirm<ConfirmationDialogBit>,
  HasEnd,
  HasInitialChannel,
  HasPlaceholder,
  HasResponseUrlEnabled,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/block-elements#channel_select}
 */

export class ChannelSelectElement extends ElementBase implements ChannelSelectElement {
  constructor(params?: ChannelSelectParams) {
    super(params);

    this.props.type = ElementType.ChannelSelect;
  }

  public build(): SlackDto {
    const augmentedProps = {
      placeholder: getPlainTextObject(this.props.placeholder),
      confirm: getBuilderResult(this.props.confirm),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(ChannelSelectElement, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialChannel,
  HasPlaceholder,
  HasResponseUrlEnabled,
]);
