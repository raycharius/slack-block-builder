import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const url = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.url,
    methodName: props.url,
    propSetterPropName: props.url,
    slackDtoParamName: paramMap.url,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
