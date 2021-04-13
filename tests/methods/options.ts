import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const options = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.options,
    methodName: props.options,
    propSetterPropName: props.options,
    slackDtoParamName: paramMap.options,
    mutatedValueType: Option,
    expectArray: true,
  };

  checks.appendableProperty(config);
  checks.builtChildBuild(config);
};
