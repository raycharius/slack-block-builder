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
  Placeholder,
} from '../internal/methods';

export interface EmailInputParams {
  actionId?: string;
  initialValue?: string;
  placeholder?: string;
}

export interface EmailInputBuilder extends ActionId,
  DispatchActionOnCharacterEntered,
  DispatchActionOnEnterPressed,
  End,
  FocusOnLoad,
  InitialValue<string>,
  Placeholder {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/email-input-element
 * @@displayName Email Input
 */

export class EmailInputBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
    return this.getResult(SlackElementDto, {
      type: ElementType.EmailInput,
      placeholder: getPlainTextObject(this.props.placeholder),
      dispatchActionConfig: getDispatchActionsConfigurationObject(this.props),
    });
  }
}

applyMixins(EmailInputBuilder, [
  ActionId,
  DispatchActionOnCharacterEntered,
  DispatchActionOnEnterPressed,
  End,
  FocusOnLoad,
  InitialValue,
  Placeholder,
]);
