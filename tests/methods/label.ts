import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { PlainTextObject } from '../../src/objects';
import * as checks from '../checks';

export const label = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.label,
    methodName: props.label,
    propSetterPropName: props.label,
    slackDtoParamName: paramMap.label,
    mutatedValueType: PlainTextObject,
  };

  checks.settableProperty(config);
  checks.mutatedBuild(config);
};
