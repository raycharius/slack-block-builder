import { ElementBuilderBase } from '../internal/base';
import { ElementType } from '../internal/constants';
import { SlackElementDto } from '../internal/dto';
import { applyMixins, getPlainTextObject, getDispatchActionsConfigurationObject } from '../internal/helpers';
import {
  ActionId,
  DispatchActionOnCharacterEntered,
  DispatchActionOnEnterPressed,
  End,
  FocusOnLoad,
  InitialValue,
  MaxLength,
  MinLength,
  Multiline,
  Placeholder,
} from '../internal/methods';

export interface TextInputParams {
  actionId?: string;
  initialValue?: string;
  multiline?: boolean;
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
}

export interface TextInputBuilder extends ActionId,
  DispatchActionOnCharacterEntered,
  DispatchActionOnEnterPressed,
  End,
  FocusOnLoad,
  InitialValue<string>,
  MaxLength,
  MinLength,
  Multiline,
  Placeholder {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/plain-text-input-element
 * @@displayName Plain-Text Input
 */

export class TextInputBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
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
  FocusOnLoad,
  InitialValue,
  MaxLength,
  MinLength,
  Multiline,
  Placeholder,
]);
