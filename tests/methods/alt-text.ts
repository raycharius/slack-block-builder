import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const altText = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.altText,
    methodName: props.altText,
    propSetterPropName: props.altText,
    slackDtoParamName: paramMap.altText,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
