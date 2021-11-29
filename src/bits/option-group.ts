import {
  applyMixins,
  getPlainTextObject,
  getBuilderResults,
  BitBuilderBase,
  SlackDto,
} from '../lib';
import {
  Label,
  End,
  Options,
} from '../methods';

export interface OptionGroupParams {
  label?: string;
}

export interface OptionGroupBuilder extends End,
  Label,
  Options {
}

/**
 * @@link https://api.slack.com/reference/block-kit/composition-objects#option_group
 * @@displayName Option Group
 */

export class OptionGroupBuilder extends BitBuilderBase {
  /** @internal */

  public build(): Readonly<SlackDto> {
    return this.getResult(SlackDto, {
      label: getPlainTextObject(this.props.label),
      options: getBuilderResults<SlackDto>(this.props.options),
    });
  }
}

applyMixins(OptionGroupBuilder, [
  End,
  Label,
  Options,
]);
