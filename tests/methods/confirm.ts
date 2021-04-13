import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const confirm = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.confirm,
    methodName: props.confirm,
    propSetterPropName: props.confirm,
    slackDtoParamName: paramMap.confirm,
  };

  checks.settableProperty(config);
  checks.builtChildBuild(config);
};
