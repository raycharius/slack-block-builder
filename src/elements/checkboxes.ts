import { ElementBase } from '../base';
import { SlackDto } from '../lib';
import {
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialOptions,
  HasOptions,
  MustBuild,
} from '../methods';
import { applyMixins, getBuilderResult, getBuilderResults } from '../helpers';
import { ElementType } from '../constants';

import type { ConfirmationDialogBit } from '../bits/confirmation-dialog';

export interface CheckboxesParams {
  actionId?: string;
}

export interface CheckboxesElement extends HasActionId,
  HasConfirm<ConfirmationDialogBit>,
  HasEnd,
  HasInitialOptions,
  HasOptions,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/block-elements#checkboxes}
 */

export class CheckboxesElement extends ElementBase implements CheckboxesElement {
  constructor(params?: CheckboxesParams) {
    super(params);

    this.props.type = ElementType.Checkboxes;
  }

  public build(): SlackDto {
    const augmentedProps = {
      options: getBuilderResults(this.props.options, { isMarkdown: true }),
      initialOptions: getBuilderResults(this.props.initialOptions, { isMarkdown: true }),
      confirm: getBuilderResult(this.props.confirm),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(CheckboxesElement, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialOptions,
  HasOptions,
]);
