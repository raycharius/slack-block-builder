import { ElementBase } from '../base';
import { SlackDto } from '../lib';
import {
  HasActionId,
  HasConfirm,
  HasEnd,
  HasOptions,
  MustBuild,
} from '../methods';
import { applyMixins, getBuilderResult, getBuilderResults } from '../helpers';
import { ElementType } from '../constants';

import type { ConfirmationDialogBit } from '../bits/confirmation-dialog';

export interface OverflowMenuParams {
  actionId?: string;
}

export interface OverflowMenuElement extends HasActionId,
  HasConfirm<ConfirmationDialogBit>,
  HasEnd,
  HasOptions,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/block-elements#overflow}
 */

export class OverflowMenuElement extends ElementBase implements OverflowMenuElement {
  constructor(params?: OverflowMenuParams) {
    super(params);

    this.props.type = ElementType.Overflow;
  }

  public build(): SlackDto {
    const augmentedProps = {
      options: getBuilderResults(this.props.options),
      confirm: getBuilderResult(this.props.confirm),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(OverflowMenuElement, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasOptions,
]);
