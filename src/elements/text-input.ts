import { ElementBase } from '../base';
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
 * {@link https://api.slack.com/reference/block-kit/block-elements#input}
 */

export class TextInputBuilder extends ElementBase {
  constructor(params?: TextInputParams) {
    super(params);

    this.props.type = ElementType.TextInput;
  }

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
