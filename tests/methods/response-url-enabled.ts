import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const responseUrlEnabled = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.responseUrlEnabled,
    methodName: props.responseUrlEnabled,
    propSetterPropName: props.responseUrlEnabled,
    slackDtoParamName: paramMap.responseUrlEnabled,
  };

  checks.boolTrueProperty(config);
  checks.boolSettableProperty(config);
  checks.literalBuild(config);
};
