import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const unfurlLinks = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.unfurlLinks,
    methodName: Prop.UnfurlLinks,
    propSetterPropName: Prop.UnfurlLinks,
    slackDtoParamName: SlackDto.mapParam(Prop.UnfurlLinks),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
