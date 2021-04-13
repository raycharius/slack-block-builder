import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const initialValue = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.initialValue,
    methodName: props.initialValue,
    propSetterPropName: props.initialValue,
    slackDtoParamName: paramMap.initialValue,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
