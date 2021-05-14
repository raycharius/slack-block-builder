import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants/props';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const excludeExternalSharedChannels = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.excludeExternalSharedChannels,
    methodName: Prop.ExcludeExternalSharedChannels,
    propSetterPropName: Prop.ExcludeExternalSharedChannels,
    slackDtoParamName: SlackDto.mapParam(Prop.Filter),
  };

  checks.boolTrueProperty(config);
  checks.boolSettableProperty(config);
};
