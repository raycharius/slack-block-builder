import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const clearOnClose = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.clearOnClose,
    methodName: props.clearOnClose,
    propSetterPropName: props.clearOnClose,
    slackDtoParamName: paramMap.clearOnClose,
  };

  checks.boolTrueProperty(config);
  checks.boolSettableProperty(config);
  checks.literalBuild(config);
};
