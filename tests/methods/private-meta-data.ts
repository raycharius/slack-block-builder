import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const privateMetaData = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.privateMetaData,
    methodName: props.privateMetaData,
    propSetterPropName: props.privateMetaData,
    slackDtoParamName: paramMap.privateMetaData,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
