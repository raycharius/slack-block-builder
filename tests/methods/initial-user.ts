import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const initialUser = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.initialUser,
    methodName: props.initialUser,
    propSetterPropName: props.initialUser,
    slackDtoParamName: paramMap.initialUser,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
