import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const color = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.color,
    methodName: props.color,
    propSetterPropName: props.color,
    slackDtoParamName: paramMap.color,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
