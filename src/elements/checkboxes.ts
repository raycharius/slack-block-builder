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
import { objectTypes } from '../constants';

export interface CheckboxesParams {
  actionId?: string;
}

export interface CheckboxesElement extends HasActionId,
  HasConfirm,
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

    this.props.type = objectTypes.elements.checkboxes;
  }

  public build(): SlackDto {
    const augmentedProps = {
      options: getBuilderResults(this.props.options, { isMarkdown: true }),
      initialOptions: getBuilderResults(this.props.initialOptions, { isMarkdown: true }),
      confirm: getBuilderResult(this.props.confirm),
    };

    return this.getResult(SlackDto, augmentedProps);
  }
}

applyMixins(CheckboxesElement, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialOptions,
  HasOptions,
]);
