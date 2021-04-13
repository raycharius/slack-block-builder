import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const minLength = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.minLength,
    methodName: props.minLength,
    propSetterPropName: props.minLength,
    slackDtoParamName: paramMap.minLength,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
