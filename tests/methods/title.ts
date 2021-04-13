import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { PlainTextObject } from '../../src/objects';
import * as checks from '../checks';

export const title = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.title,
    methodName: props.title,
    propSetterPropName: props.title,
    slackDtoParamName: paramMap.title,
    mutatedValueType: PlainTextObject,
  };

  checks.settableProperty(config);
  checks.mutatedBuild(config);
};
