import { ElementBuilderBase } from '../internal/base';
import { ElementType } from '../internal/constants';
import { SlackElementDto } from '../internal/dto';
import { applyMixins, getBuilderResult, getBuilderResults } from '../internal/helpers';
import {
  ActionId,
  Confirm,
  End,
  Options,
} from '../internal/methods';

import type { SlackDto } from '../internal/dto';
import type { ConfirmationDialogBuilder } from '../bits';

export interface OverflowMenuParams {
  actionId?: string;
}

export interface OverflowMenuBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  Options {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/overflow-menu-element
 * @@displayName Overflow Menu
 */

export class OverflowMenuBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
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
