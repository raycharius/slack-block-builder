import { ElementBuilder } from '../base';
import { SlackDto } from '../lib';
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
  public build(): SlackDto {
    const augmentedProps = {
      placeholder: getPlainTextObject(this.props.placeholder),
      dispatchActionConfig: getDispatchActionsConfigurationObject(this.props),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
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
