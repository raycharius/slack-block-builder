import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const blocks = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.blocks,
    methodName: props.blocks,
    propSetterPropName: props.blocks,
    slackDtoParamName: paramMap.blocks,
    expectArray: true,
  };

  checks.appendableProperty(config);
  checks.builtChildBuild(config);
};
