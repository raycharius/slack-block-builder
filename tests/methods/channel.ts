import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants/props';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const channel = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.channel,
    methodName: Prop.Channel,
    propSetterPropName: Prop.Channel,
    slackDtoParamName: SlackDto.mapParam(Prop.Channel),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
