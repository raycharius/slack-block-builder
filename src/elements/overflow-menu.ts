import { ElementBuilderBase } from '../base';
import { SlackElementDto } from '../lib';
import {
  ActionId,
  Confirm,
  End,
  Options,
} from '../methods';
import { applyMixins, getBuilderResult, getBuilderResults } from '../helpers';
import { ElementType } from '../constants';

import type { SlackDto } from '../lib';
import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface OverflowMenuParams {
  actionId?: string;
}

export interface OverflowMenuBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  Options {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#overflow
 * @@displayName Overflow Menu
 */

export class OverflowMenuBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): SlackElementDto {
    return this.getResult(SlackElementDto, {
      type: ElementType.Overflow,
      options: getBuilderResults<SlackDto>(this.props.options),
      confirm: getBuilderResult<SlackDto>(this.props.confirm),
    });
  }
}

applyMixins(OverflowMenuBuilder, [
  ActionId,
  Confirm,
  End,
  Options,
]);
