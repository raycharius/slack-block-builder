import { ElementBuilderBase } from '../base';
import { SlackElementDto } from '../lib';
import {
  ActionId,
  DispatchActionOnCharacterEntered,
  DispatchActionOnEnterPressed,
  End,
  InitialValue,
  MaxLength,
  MinLength,
  Multiline,
  Placeholder,
  Build,
} from '../methods';
import { applyMixins, getPlainTextObject, getDispatchActionsConfigurationObject } from '../helpers';
import { ElementType } from '../constants/element-types';

export interface TextInputParams {
  actionId?: string;
  initialValue?: string;
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
}

export interface TextInputBuilder extends ActionId,
  DispatchActionOnCharacterEntered,
  DispatchActionOnEnterPressed,
  End,
  InitialValue,
  MaxLength,
  MinLength,
  Multiline,
  Placeholder,
  Build {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#input
 * @@displayName Plain-Text Input
 */

export class TextInputBuilder extends ElementBuilderBase<TextInputParams> {
  /** @internal */

  public build(): SlackElementDto {
    return this.getResult(SlackElementDto, {
      type: ElementType.TextInput,
      placeholder: getPlainTextObject(this.props.placeholder),
      dispatchActionConfig: getDispatchActionsConfigurationObject(this.props),
    });
  }
}

applyMixins(TextInputBuilder, [
  ActionId,
  DispatchActionOnCharacterEntered,
  DispatchActionOnEnterPressed,
  End,
  InitialValue,
  MaxLength,
  MinLength,
  Multiline,
  Placeholder,
]);
