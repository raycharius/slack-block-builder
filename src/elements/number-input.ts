import { ElementBuilderBase } from '../internal/base';
import { ElementType } from '../internal/constants';
import { SlackElementDto } from '../internal/dto';
import {
  applyMixins,
  getPlainTextObject,
  getDispatchActionsConfigurationObject,
  getStringFromNumber,
} from '../internal/helpers';
import {
  ActionId,
  DispatchActionOnCharacterEntered,
  DispatchActionOnEnterPressed,
  End,
  FocusOnLoad,
  InitialValue,
  IsDecimalAllowed,
  MaxValue,
  MinValue,
  Placeholder,
} from '../internal/methods';

export interface NumberInputParams {
  actionId?: string;
  initialValue?: number;
  isDecimalAllowed?: boolean;
  minValue?: number;
  maxValue?: number;
  placeholder?: string;
}

export interface NumberInputBuilder extends ActionId,
  DispatchActionOnCharacterEntered,
  DispatchActionOnEnterPressed,
  End,
  FocusOnLoad,
  InitialValue<number>,
  IsDecimalAllowed,
  MaxValue,
  MinValue,
  Placeholder {
}

/**
 * @@link https://docs.slack.dev/reference/block-kit/block-elements/number-input-element
 * @@displayName Email Input
 */

export class NumberInputBuilder extends ElementBuilderBase {
  /** @internal */

  public build(): Readonly<SlackElementDto> {
    return this.getResult(SlackElementDto, {
      type: ElementType.NumberInput,
      initialValue: getStringFromNumber(this.props.initialValue),
      maxValue: getStringFromNumber(this.props.maxValue),
      minValue: getStringFromNumber(this.props.minValue),
      placeholder: getPlainTextObject(this.props.placeholder),
      dispatchActionConfig: getDispatchActionsConfigurationObject(this.props),
    });
  }
}

applyMixins(NumberInputBuilder, [
  ActionId,
  DispatchActionOnCharacterEntered,
  DispatchActionOnEnterPressed,
  End,
  FocusOnLoad,
  InitialValue,
  IsDecimalAllowed,
  MaxValue,
  MinValue,
  Placeholder,
]);
