import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const value = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.value,
    methodName: props.value,
    propSetterPropName: props.value,
    slackDtoParamName: paramMap.value,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
