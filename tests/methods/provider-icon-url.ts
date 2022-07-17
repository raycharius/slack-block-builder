import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const providerIconUrl = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.providerIconUrl,
    methodName: Prop.ProviderIconUrl,
    propSetterPropName: Prop.ProviderIconUrl,
    slackDtoParamName: SlackDto.mapParam(Prop.ProviderIconUrl),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
