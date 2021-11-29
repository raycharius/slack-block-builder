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
  InitialChannel,
  Placeholder,
  ResponseUrlEnabled,
} from '../methods';
import { ElementType } from '../constants';

import type { SlackDto } from '../lib';
import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface ChannelSelectParams {
  actionId?: string;
  initialChannel?: string;
  placeholder?: string;
}

export interface ChannelSelectBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  FocusOnLoad,
  InitialChannel,
  Placeholder,
  ResponseUrlEnabled {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#channel_select
 * @@displayName Channel Select
 */

export class ChannelSelectBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
    return this.getResult(SlackElementDto, {
      type: ElementType.ChannelSelect,
      placeholder: getPlainTextObject(this.props.placeholder),
      confirm: getBuilderResult<SlackDto>(this.props.confirm),
    });
  }
}

applyMixins(ChannelSelectBuilder, [
  ActionId,
  Confirm,
  End,
  FocusOnLoad,
  InitialChannel,
  Placeholder,
  ResponseUrlEnabled,
]);
