import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const initialUsers = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.initialUsers,
    methodName: props.initialUsers,
    propSetterPropName: props.initialUsers,
    slackDtoParamName: paramMap.initialUsers,
  };

  checks.appendableProperty(config);
  checks.literalBuild(config);
};
