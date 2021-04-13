import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap, values } from '../../src/constants';
import * as checks from '../checks';

export const onCharacterEntered = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodName: props.dispatchActionOnCharacterEntered,
    propSetterPropName: props.onCharacterEntered,
    slackDtoParamName: paramMap.dispatchActionConfig,
    expectedEnumValue: values.onCharacterEntered,
    expectedBuiltValue: { trigger_actions_on: ['on_character_entered'] },
  };

  checks.configurableEnumValueProperty(config);
};
