import { ElementBuilder } from '../base';
import { ElementSlackDto } from '../lib';
import {
  ActionId,
  Confirm,
  End,
  Options,
  Build,
} from '../methods';
import { applyMixins, getBuilderResult, getBuilderResults } from '../helpers';
import { ElementType } from '../constants';

import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface OverflowMenuParams {
  actionId?: string;
}

export interface OverflowMenuBuilder extends ActionId,
  Confirm<ConfirmationDialogBuilder>,
  End,
  Options,
  Build {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#overflow
 * @@displayName Overflow Menu
 */

export class OverflowMenuBuilder extends ElementBuilder<OverflowMenuParams> {
  /** @internal */

  public build(): ElementSlackDto {
    return this.getResult(ElementSlackDto, {
      type: ElementType.Overflow,
      options: getBuilderResults(this.props.options),
      confirm: getBuilderResult(this.props.confirm),
    });
  }
}

applyMixins(OverflowMenuBuilder, [
  ActionId,
  Confirm,
  End,
  Options,
]);
