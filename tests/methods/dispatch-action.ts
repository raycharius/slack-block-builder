import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const dispatchAction = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.dispatchAction,
    methodName: props.dispatchAction,
    propSetterPropName: props.dispatchAction,
    slackDtoParamName: paramMap.dispatchAction,
  };

  checks.boolTrueProperty(config);
  checks.boolSettableProperty(config);
  checks.literalBuild(config);
};
