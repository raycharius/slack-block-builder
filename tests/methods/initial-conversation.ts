import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const initialConversation = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.initialConversation,
    methodName: props.initialConversation,
    propSetterPropName: props.initialConversation,
    slackDtoParamName: paramMap.initialConversation,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
