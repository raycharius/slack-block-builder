import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const postAt = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.postAt,
    methodName: props.postAt,
    propSetterPropName: props.postAt,
    slackDtoParamName: paramMap.postAt,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
