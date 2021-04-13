import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const fallback = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.fallback,
    methodName: props.fallback,
    propSetterPropName: props.fallback,
    slackDtoParamName: paramMap.fallback,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
