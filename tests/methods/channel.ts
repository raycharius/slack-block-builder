import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const channel = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.channel,
    methodName: props.channel,
    propSetterPropName: props.channel,
    slackDtoParamName: paramMap.channel,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
