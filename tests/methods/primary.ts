import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap, values } from '../../src/constants';
import * as checks from '../checks';

export const primary = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodName: props.primary,
    propSetterPropName: props.style,
    slackDtoParamName: paramMap.style,
    expectedEnumValue: values.primary,
  };

  checks.configurableEnumValueProperty(config);
};
