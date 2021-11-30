import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const initialChannels = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.initialChannels,
    methodName: Prop.InitialChannels,
    propSetterPropName: Prop.InitialChannels,
    slackDtoParamName: SlackDto.mapParam(Prop.InitialChannels),
  };

  checks.appendableProperty(config);
  checks.literalBuild(config);
};
