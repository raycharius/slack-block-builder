import { ElementBuilder } from '../base';
import { ElementSlackDto } from '../lib';
import {
  HasActionId,
  HasDispatchActionOnCharacterEntered,
  HasDispatchActionOnEnterPressed,
  HasEnd,
  HasInitialValue,
  HasMaxLength,
  HasMinLength,
  HasMultiline,
  HasPlaceholder,
  MustBuild,
} from '../methods';
import { applyMixins, getPlainTextObject, getDispatchActionsConfigurationObject } from '../helpers';
import { ElementType } from '../constants';

export interface TextInputParams {
  actionId?: string;
  initialValue?: string;
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
}

export interface TextInputBuilder extends HasActionId,
  HasDispatchActionOnCharacterEntered,
  HasDispatchActionOnEnterPressed,
  HasEnd,
  HasInitialValue,
  HasMaxLength,
  HasMinLength,
  HasMultiline,
  HasPlaceholder,
  MustBuild {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#input
 * @@displayName Plain-Text Input
 */

export class TextInputBuilder extends ElementBuilder<TextInputParams> {
  /** @internal */

  public build(): ElementSlackDto {
    return this.getResult(ElementSlackDto, {
      type: ElementType.TextInput,
      placeholder: getPlainTextObject(this.props.placeholder),
      dispatchActionConfig: getDispatchActionsConfigurationObject(this.props),
    });
  }
}

applyMixins(TextInputBuilder, [
  HasActionId,
  HasDispatchActionOnCharacterEntered,
  HasDispatchActionOnEnterPressed,
  HasEnd,
  HasInitialValue,
  HasMaxLength,
  HasMinLength,
  HasMultiline,
  HasPlaceholder,
]);
