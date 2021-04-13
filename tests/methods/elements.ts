import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const elements = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.elements,
    methodName: props.elements,
    propSetterPropName: props.elements,
    slackDtoParamName: paramMap.elements,
    mutatedValueType: Element,
    expectArray: true,
  };

  checks.appendableProperty(config);
  checks.builtChildBuild(config);
};
