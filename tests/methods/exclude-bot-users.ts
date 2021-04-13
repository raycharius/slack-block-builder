import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const excludeBotUsers = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.excludeBotUsers,
    methodName: props.excludeBotUsers,
    propSetterPropName: props.excludeBotUsers,
    slackDtoParamName: paramMap.filter,
  };

  checks.boolTrueProperty(config);
  checks.boolSettableProperty(config);
};
