import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const initialTime = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.initialTime,
    methodName: props.initialTime,
    propSetterPropName: props.initialTime,
    slackDtoParamName: paramMap.initialTime,
  };

  checks.settableProperty(config);
};
