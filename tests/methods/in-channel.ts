import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap, values } from '../../src/constants';
import * as checks from '../checks';

export const inChannel = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodName: props.inChannel,
    propSetterPropName: props.responseType,
    slackDtoParamName: paramMap.responseType,
    expectedEnumValue: values.inChannel,
  };

  checks.configurableEnumValueProperty(config);
};
