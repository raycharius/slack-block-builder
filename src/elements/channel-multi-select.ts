import {
  applyMixins,
  getPlainTextObject,
  getBuilderResult,
  ElementBuilderBase,
  SlackElementDto,
} from '../lib';
import {
  ActionId,
  Confirm,
  End,
  FocusOnLoad,
  InitialChannels,
  MaxSelectedItems,
  Placeholder,
} from '../methods';
import { ElementType } from '../constants';

import type { SlackDto } from '../lib';
import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface ChannelMultiSelectParams {
  actionId?: string;
  maxSelectedItems?: number;
  placeholder?: string;
}

export interface ChannelMultiSelectBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  FocusOnLoad,
  InitialChannels,
  MaxSelectedItems,
  Placeholder {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#channel_multi_select
 * @@displayName Channel Multi-Select
 */

export class ChannelMultiSelectBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
    return this.getResult(SlackElementDto, {
      type: ElementType.ChannelsMultiSelect,
      placeholder: getPlainTextObject(this.props.placeholder),
      confirm: getBuilderResult<SlackDto>(this.props.confirm),
    });
  }
}

applyMixins(ChannelMultiSelectBuilder, [
  ActionId,
  Confirm,
  End,
  FocusOnLoad,
  InitialChannels,
  MaxSelectedItems,
  Placeholder,
]);
