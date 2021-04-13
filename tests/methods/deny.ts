import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { PlainTextObject } from '../../src/objects';
import * as checks from '../checks';

export const deny = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.deny,
    methodName: props.deny,
    propSetterPropName: props.deny,
    slackDtoParamName: paramMap.deny,
    mutatedValueType: PlainTextObject,
  };

  checks.settableProperty(config);
  checks.mutatedBuild(config);
};
