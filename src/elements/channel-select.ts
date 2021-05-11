import { ElementBuilder } from '../base';
import { ElementSlackDto } from '../lib';
import {
  ActionId,
  Confirm,
  End,
  InitialChannel,
  Placeholder,
  ResponseUrlEnabled,
  Build,
} from '../methods';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../helpers';
import { ElementType } from '../constants';

import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface ChannelSelectParams {
  actionId?: string;
  initialChannel?: string;
  placeholder?: string;
}

export interface ChannelSelectBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  InitialChannel,
  Placeholder,
  ResponseUrlEnabled,
  Build {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#channel_select
 * @@displayName Channel Select
 */

export class ChannelSelectBuilder extends ElementBuilder<ChannelSelectParams> {
  /** @internal */

  public build(): ElementSlackDto {
    return this.getResult(ElementSlackDto, {
      type: ElementType.ChannelSelect,
      placeholder: getPlainTextObject(this.props.placeholder),
      confirm: getBuilderResult(this.props.confirm),
    });
  }
}

applyMixins(ChannelSelectBuilder, [
  ActionId,
  Confirm,
  End,
  InitialChannel,
  Placeholder,
  ResponseUrlEnabled,
]);
