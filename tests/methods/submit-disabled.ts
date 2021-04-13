import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const submitDisabled = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.submitDisabled,
    methodName: props.submitDisabled,
    propSetterPropName: props.submitDisabled,
    slackDtoParamName: paramMap.submitDisabled,
  };

  checks.boolTrueProperty(config);
  checks.boolSettableProperty(config);
  checks.literalBuild(config);
};
