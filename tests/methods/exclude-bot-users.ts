import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

const dtoParamName = 'exclude_bot_users';

export const excludeBotUsers = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.excludeBotUsers,
    methodName: Prop.ExcludeBotUsers,
    propSetterPropName: Prop.ExcludeBotUsers,
    slackDtoParamName: dtoParamName,
  };

  checks.boolTrueProperty(config);
  checks.boolSettableProperty(config);
  checks.builtFilterProperty(config);
};
