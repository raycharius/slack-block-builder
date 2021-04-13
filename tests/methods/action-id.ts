import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const actionId = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.actionId,
    methodName: props.actionId,
    propSetterPropName: props.actionId,
    slackDtoParamName: paramMap.actionId,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
