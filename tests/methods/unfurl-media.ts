import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const unfurlMedia = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.unfurlMedia,
    methodName: Prop.UnfurlMedia,
    propSetterPropName: Prop.UnfurlMedia,
    slackDtoParamName: SlackDto.mapParam(Prop.UnfurlMedia),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
