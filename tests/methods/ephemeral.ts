import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap, values } from '../../src/constants';
import * as checks from '../checks';

export const ephemeral = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodName: props.ephemeral,
    propSetterPropName: props.responseType,
    slackDtoParamName: paramMap.responseType,
    expectedEnumValue: values.ephemeral,
  };

  checks.configurableEnumValueProperty(config);
};
