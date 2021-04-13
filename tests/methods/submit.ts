import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { PlainTextObject } from '../../src/objects';
import * as checks from '../checks';

export const submit = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.submit,
    methodName: props.submit,
    propSetterPropName: props.submit,
    slackDtoParamName: paramMap.submit,
    mutatedValueType: PlainTextObject,
  };

  checks.settableProperty(config);
  checks.mutatedBuild(config);
};
