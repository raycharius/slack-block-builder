import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const callbackId = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.callbackId,
    methodName: props.callbackId,
    propSetterPropName: props.callbackId,
    slackDtoParamName: paramMap.callbackId,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
