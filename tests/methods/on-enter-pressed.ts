import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap, values } from '../../src/constants';
import * as checks from '../checks';

export const onEnterPressed = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodName: props.dispatchActionOnEnterPressed,
    propSetterPropName: props.onEnterPressed,
    slackDtoParamName: paramMap.dispatchActionConfig,
    expectedEnumValue: values.onEnterPressed,
    expectedBuiltValue: { trigger_actions_on: ['on_enter_pressed'] },
  };

  checks.configurableEnumValueProperty(config);
};
