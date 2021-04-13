import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { MarkdownObject } from '../../src/objects';
import * as checks from '../checks';

export const fields = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.fields,
    methodName: props.fields,
    propSetterPropName: props.fields,
    slackDtoParamName: paramMap.fields,
    mutatedValueType: MarkdownObject,
    expectArray: true,
  };

  checks.appendableProperty(config);
  checks.mutatedBuild(config);
};
