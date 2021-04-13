import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const threadTs = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.threadTs,
    methodName: props.threadTs,
    propSetterPropName: props.threadTs,
    slackDtoParamName: paramMap.threadTs,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
