import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const textMessage = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.text,
    methodName: props.text,
    propSetterPropName: props.text,
    slackDtoParamName: paramMap.text,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
