import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const initialChannels = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.initialChannels,
    methodName: props.initialChannels,
    propSetterPropName: props.initialChannels,
    slackDtoParamName: paramMap.initialChannels,
  };

  checks.appendableProperty(config);
  checks.literalBuild(config);
};
