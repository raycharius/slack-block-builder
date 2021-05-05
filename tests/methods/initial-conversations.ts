import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const initialConversations = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.initialConversations,
    methodName: Prop.InitialConversations,
    propSetterPropName: Prop.InitialConversations,
    slackDtoParamName: SlackDto.mapParam(Prop.InitialConversations),
  };

  checks.appendableProperty(config);
  checks.literalBuild(config);
};
