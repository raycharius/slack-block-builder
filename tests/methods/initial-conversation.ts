import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const initialConversation = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.initialConversation,
    methodName: Prop.InitialConversation,
    propSetterPropName: Prop.InitialConversation,
    slackDtoParamName: SlackDto.mapParam(Prop.InitialConversation),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
