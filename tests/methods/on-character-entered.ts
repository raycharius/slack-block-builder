import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop, DispatchOnType } from '../../src/constants';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const onCharacterEntered = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodName: Prop.DispatchActionOnCharacterEntered,
    propSetterPropName: Prop.OnCharacterEntered,
    slackDtoParamName: SlackDto.mapParam(Prop.DispatchActionConfig),
    expectedEnumValue: DispatchOnType.OnCharacterEntered,
    expectedBuiltValue: { trigger_actions_on: ['on_character_entered'] },
  };

  checks.configurableEnumValueProperty(config);
};
