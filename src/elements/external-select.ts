import { ElementBase } from '../base';
import { SlackDto } from '../lib';
import {
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialOption,
  HasMinQueryLength,
  HasPlaceholder,
  MustBuild,
} from '../methods';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../helpers';
import { objectTypes } from '../constants';

export interface ExternalSelectParams {
  actionId?: string;
  minQueryLength?: number;
  placeholder?: string;
}

export interface ExternalSelectElement extends HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialOption,
  HasMinQueryLength,
  HasPlaceholder,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/block-elements#external_select}
 */

export class ExternalSelectElement extends ElementBase implements ExternalSelectElement {
  constructor(params?: ExternalSelectParams) {
    super(params);

    this.props.type = objectTypes.elements.externalSelect;
  }

  public build(): SlackDto {
    const augmentedProps = {
      placeholder: getPlainTextObject(this.props.placeholder),
      initialOption: getBuilderResult(this.props.initialOption),
      confirm: getBuilderResult(this.props.confirm),
    };

    return this.getResult(SlackDto, augmentedProps);
  }
}

applyMixins(ExternalSelectElement, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialOption,
  HasMinQueryLength,
  HasPlaceholder,
]);
