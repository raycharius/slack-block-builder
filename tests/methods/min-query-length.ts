import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const minQueryLength = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.minQueryLength,
    methodName: props.minQueryLength,
    propSetterPropName: props.minQueryLength,
    slackDtoParamName: paramMap.minQueryLength,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
