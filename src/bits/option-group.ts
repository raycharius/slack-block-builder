import { BitBase } from '../base';
import { SlackDto } from '../lib';
import {
  HasLabel,
  HasEnd,
  HasOptions,
  MustBuild,
} from '../methods';
import { applyMixins, getPlainTextObject, getBuilderResults } from '../helpers';

export interface OptionGroupParams {
  label?: string;
}

export interface OptionGroupBit extends HasEnd,
  HasLabel,
  HasOptions,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/composition-objects#option_group}
 */

export class OptionGroupBit extends BitBase implements OptionGroupBit {
  constructor(params?: OptionGroupParams) {
    super(params);
  }

  public build(): SlackDto {
    const augmentedProps = {
      label: getPlainTextObject(this.props.label),
      options: getBuilderResults(this.props.options),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(OptionGroupBit, [
  HasEnd,
  HasLabel,
  HasOptions,
]);
