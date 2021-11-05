import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

const dtoParamName = 'exclude_external_shared_channels';

export const excludeExternalSharedChannels = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.excludeExternalSharedChannels,
    methodName: Prop.ExcludeExternalSharedChannels,
    propSetterPropName: Prop.ExcludeExternalSharedChannels,
    slackDtoParamName: dtoParamName,
  };

  checks.boolTrueProperty(config);
  checks.boolSettableProperty(config);
  checks.builtFilterProperty(config);
};
