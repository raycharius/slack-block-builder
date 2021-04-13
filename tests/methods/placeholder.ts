import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { PlainTextObject } from '../../src/objects';
import * as checks from '../checks';

export const placeholder = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.placeholder,
    methodName: props.placeholder,
    propSetterPropName: props.placeholder,
    slackDtoParamName: paramMap.placeholder,
    mutatedValueType: PlainTextObject,
  };

  checks.settableProperty(config);
  checks.mutatedBuild(config);
};
