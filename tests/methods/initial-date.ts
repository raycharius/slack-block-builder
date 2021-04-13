import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const initialDate = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.initialDate,
    methodName: props.initialDate,
    propSetterPropName: props.initialDate,
    slackDtoParamName: paramMap.initialDate,
  };

  checks.settableProperty(config);
};
