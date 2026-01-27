import { BitBuilderBase } from '../internal/base';
import { SlackDto } from '../internal/dto';
import { applyMixins, getPlainTextObject, getMarkdownObject } from '../internal/helpers';
import {
  Description,
  End,
  Text,
  Url,
  Value,
} from '../internal/methods';

import type { ObjectLiteral } from '../internal/types';

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
 * @@link https://docs.slack.dev/reference/block-kit/composition-objects/option-object
 * @@displayName Option
 */

export class OptionBuilder extends BitBuilderBase {
  /** @internal */

  public build({ isMarkdown }: ObjectLiteral = { isMarkdown: false }): Readonly<SlackDto> {
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
