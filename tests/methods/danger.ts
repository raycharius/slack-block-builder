import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap, values } from '../../src/constants';
import * as checks from '../checks';

export const danger = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodName: props.danger,
    propSetterPropName: props.style,
    slackDtoParamName: paramMap.style,
    expectedEnumValue: values.danger,
  };

  checks.configurableEnumValueProperty(config);
};
