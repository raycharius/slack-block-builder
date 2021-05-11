import { ElementBuilder } from '../base';
import { ElementSlackDto } from '../lib';
import {
  ActionId,
  Confirm,
  End,
  InitialChannels,
  MaxSelectedItems,
  Placeholder,
  Build,
} from '../methods';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../helpers';
import { ElementType } from '../constants';

import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface ChannelMultiSelectParams {
  actionId?: string;
  maxSelectedItems?: number;
  placeholder?: string;
}

export interface ChannelMultiSelectBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  InitialChannels,
  MaxSelectedItems,
  Placeholder,
  Build {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#channel_multi_select
 * @@displayName Channel Multi-Select
 */

export class ChannelMultiSelectBuilder extends ElementBuilder<ChannelMultiSelectParams> {
  /** @internal */

  public build(): ElementSlackDto {
    return this.getResult(ElementSlackDto, {
      type: ElementType.ChannelsMultiSelect,
      placeholder: getPlainTextObject(this.props.placeholder),
      confirm: getBuilderResult(this.props.confirm),
    });
  }
}

applyMixins(ChannelMultiSelectBuilder, [
  ActionId,
  Confirm,
  End,
  InitialChannels,
  MaxSelectedItems,
  Placeholder,
]);
