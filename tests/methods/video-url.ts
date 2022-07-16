import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const videoUrl = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.videoUrl,
    methodName: Prop.VideoUrl,
    propSetterPropName: Prop.VideoUrl,
    slackDtoParamName: SlackDto.mapParam(Prop.VideoUrl),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
