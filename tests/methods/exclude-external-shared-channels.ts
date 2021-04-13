import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const excludeExternalSharedChannels = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.excludeExternalSharedChannels,
    methodName: props.excludeExternalSharedChannels,
    propSetterPropName: props.excludeExternalSharedChannels,
    slackDtoParamName: paramMap.filter,
  };

  checks.boolTrueProperty(config);
  checks.boolSettableProperty(config);
};
