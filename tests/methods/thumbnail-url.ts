import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const thumbnailUrl = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.thumbnailUrl,
    methodName: Prop.ThumbnailUrl,
    propSetterPropName: Prop.ThumbnailUrl,
    slackDtoParamName: SlackDto.mapParam(Prop.ThumbnailUrl),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
