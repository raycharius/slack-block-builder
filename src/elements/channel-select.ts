import { ElementBuilderBase } from '../internal/base';
import { ElementType } from '../internal/constants';
import { SlackElementDto } from '../internal/dto';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../internal/helpers';
import {
  ActionId,
  Confirm,
  End,
  FocusOnLoad,
  InitialChannel,
  Placeholder,
  ResponseUrlEnabled,
} from '../internal/methods';

import type { SlackDto } from '../internal/dto';
import type { ConfirmationDialogBuilder } from '../bits';

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
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/select-menu-element#channels_select
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
