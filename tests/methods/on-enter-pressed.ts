import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop, DispatchOnType } from '../../src/internal/constants';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const onEnterPressed = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodName: Prop.DispatchActionOnEnterPressed,
    propSetterPropName: Prop.OnEnterPressed,
    slackDtoParamName: SlackDto.mapParam(Prop.DispatchActionConfig),
    expectedEnumValue: DispatchOnType.OnEnterPressed,
    expectedBuiltValue: { trigger_actions_on: ['on_enter_pressed'] },
  };

  checks.configurableEnumValueProperty(config);
};
