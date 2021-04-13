import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const initialConversations = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.initialConversations,
    methodName: props.initialConversations,
    propSetterPropName: props.initialConversations,
    slackDtoParamName: paramMap.initialConversations,
  };

  checks.appendableProperty(config);
  checks.literalBuild(config);
};
