import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const externalId = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.externalId,
    methodName: props.externalId,
    propSetterPropName: props.externalId,
    slackDtoParamName: paramMap.externalId,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
