import { ElementBuilder } from '../base';
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

import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface CheckboxesParams {
  actionId?: string;
}

export interface CheckboxesBuilder extends HasActionId,
  HasConfirm<ConfirmationDialogBuilder>,
  HasEnd,
  HasInitialOptions,
  HasOptions,
  MustBuild {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#checkboxes
 * @@displayName Checkboxes
 */

export class CheckboxesBuilder extends ElementBuilder<CheckboxesParams> {
  public build(): SlackDto {
    const augmentedProps = {
      options: getBuilderResults(this.props.options, { isMarkdown: true }),
      initialOptions: getBuilderResults(this.props.initialOptions, { isMarkdown: true }),
      confirm: getBuilderResult(this.props.confirm),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(CheckboxesBuilder, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialOptions,
  HasOptions,
]);
