import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const element = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.element,
    methodName: props.element,
    propSetterPropName: props.element,
    slackDtoParamName: paramMap.element,
    mutatedValueType: Element,
  };

  checks.settableProperty(config);
  checks.builtChildBuild(config);
};
