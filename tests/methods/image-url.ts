import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const imageUrl = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.imageUrl,
    methodName: props.imageUrl,
    propSetterPropName: props.imageUrl,
    slackDtoParamName: paramMap.imageUrl,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
