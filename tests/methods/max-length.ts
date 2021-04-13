import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const maxLength = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.maxLength,
    methodName: props.maxLength,
    propSetterPropName: props.maxLength,
    slackDtoParamName: paramMap.maxLength,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
