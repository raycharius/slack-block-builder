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

export interface URLInputParams {
  actionId?: string;
  initialValue?: string;
  placeholder?: string;
}

export interface URLInputBuilder extends ActionId,
  DispatchActionOnCharacterEntered,
  DispatchActionOnEnterPressed,
  End,
  FocusOnLoad,
  InitialValue<string>,
  Placeholder {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/url-input-element
 * @@displayName URL Input
 */

export class URLInputBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
    return this.getResult(SlackElementDto, {
      type: ElementType.URLInput,
      placeholder: getPlainTextObject(this.props.placeholder),
      dispatchActionConfig: getDispatchActionsConfigurationObject(this.props),
    });
  }
}

applyMixins(URLInputBuilder, [
  ActionId,
  DispatchActionOnCharacterEntered,
  DispatchActionOnEnterPressed,
  End,
  FocusOnLoad,
  InitialValue,
  Placeholder,
]);
