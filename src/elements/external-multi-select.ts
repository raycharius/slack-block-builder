import { ElementBase } from '../base';
import { SlackDto } from '../lib';
import {
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialOptions,
  HasMaxSelectedItems,
  HasMinQueryLength,
  HasPlaceholder,
  MustBuild,
} from '../methods';
import {
  applyMixins,
  getPlainTextObject,
  getBuilderResult,
  getBuilderResults,
} from '../helpers';
import { ElementType } from '../constants';

import type { ConfirmationDialogBit } from '../bits/confirmation-dialog';

export interface ExternalMultiSelectParams {
  actionId?: string;
  maxSelectedItems?: number;
  minQueryLength?: number;
  placeholder?: string;
}

export interface ExternalMultiSelectElement extends HasActionId,
  HasConfirm<ConfirmationDialogBit>,
  HasEnd,
  HasInitialOptions,
  HasMaxSelectedItems,
  HasMinQueryLength,
  HasPlaceholder,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/block-elements#external_multi_select}
 */

export class ExternalMultiSelectElement extends ElementBase implements ExternalMultiSelectElement {
  constructor(params?: ExternalMultiSelectParams) {
    super(params);

    this.props.type = ElementType.ExternalMultiSelect;
  }

  public build(): SlackDto {
    const augmentedProps = {
      placeholder: getPlainTextObject(this.props.placeholder),
      initialOptions: getBuilderResults(this.props.initialOptions),
      confirm: getBuilderResult(this.props.confirm),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(ExternalMultiSelectElement, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialOptions,
  HasMaxSelectedItems,
  HasMinQueryLength,
  HasPlaceholder,
]);
