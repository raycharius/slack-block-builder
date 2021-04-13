import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const deleteOriginal = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.deleteOriginal,
    methodName: props.deleteOriginal,
    propSetterPropName: props.deleteOriginal,
    slackDtoParamName: paramMap.deleteOriginal,
  };

  checks.boolTrueProperty(config);
  checks.boolSettableProperty(config);
  checks.literalBuild(config);
};
