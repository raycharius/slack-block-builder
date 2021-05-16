import { BitBuilderBase } from '../base';
import { SlackDto } from '../lib';
import {
  Description,
  End,
  Text,
  Url,
  Value,
} from '../methods';
import { applyMixins, getPlainTextObject, getMarkdownObject } from '../helpers';

import type { ObjectLiteral } from '../types';

export interface OptionParams {
  description?: string;
  text?: string;
  url?: string;
  value?: string;
}

export interface OptionBuilder extends Description,
  End,
  Text,
  Url,
  Value {
}

/**
 * @@link https://api.slack.com/reference/block-kit/composition-objects#option
 * @@displayName Option
 */

export class OptionBuilder extends BitBuilderBase {
  /** @internal */

  public build({ isMarkdown }: ObjectLiteral = { isMarkdown: false }): SlackDto {
    return this.getResult(SlackDto, {
      text: isMarkdown
        ? getMarkdownObject(this.props.text)
        : getPlainTextObject(this.props.text),
      description: isMarkdown
        ? getMarkdownObject(this.props.description)
        : getPlainTextObject(this.props.description),
    });
  }
}

applyMixins(OptionBuilder, [
  Description,
  End,
  Text,
  Url,
  Value,
]);
