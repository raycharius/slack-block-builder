import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const defaultToCurrentConversation = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.defaultToCurrentConversation,
    methodName: props.defaultToCurrentConversation,
    propSetterPropName: props.defaultToCurrentConversation,
    slackDtoParamName: paramMap.defaultToCurrentConversation,
  };

  checks.boolTrueProperty(config);
  checks.boolSettableProperty(config);
  checks.literalBuild(config);
};
