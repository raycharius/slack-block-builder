import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const blockId = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.blockId,
    methodName: props.blockId,
    propSetterPropName: props.blockId,
    slackDtoParamName: paramMap.blockId,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
