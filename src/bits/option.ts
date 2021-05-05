import { BitBase } from '../base';
import { SlackDto } from '../lib';
import {
  HasDescription,
  HasEnd,
  HasText,
  HasUrl,
  HasValue,
  MustBuild,
} from '../methods';
import { applyMixins, getPlainTextObject, getMarkdownObject } from '../helpers';

import type { ObjectLiteral } from '../types';

export interface OptionParams {
  description?: string;
  text?: string;
  url?: string;
  value?: string;
}

export interface OptionBit extends HasDescription,
  HasEnd,
  HasText,
  HasUrl,
  HasValue,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/composition-objects#option}
 */

export class OptionBit extends BitBase implements OptionBit {
  constructor(params?: OptionParams) {
    super(params);
  }

  public build({ isMarkdown }: ObjectLiteral = { isMarkdown: false }): SlackDto {
    const augmentedProps = {
      text: isMarkdown
        ? getMarkdownObject(this.props.text)
        : getPlainTextObject(this.props.text),
      description: isMarkdown
        ? getMarkdownObject(this.props.description)
        : getPlainTextObject(this.props.description),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(OptionBit, [
  HasDescription,
  HasEnd,
  HasText,
  HasUrl,
  HasValue,
]);
