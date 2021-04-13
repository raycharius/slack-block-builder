import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { PlainTextObject, MarkdownObject } from '../../src/objects';
import * as checks from '../checks';

export const text = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.text,
    methodName: props.text,
    propSetterPropName: props.text,
    slackDtoParamName: paramMap.text,
    mutatedValueType: params.expectMarkdown ? MarkdownObject : PlainTextObject,
  };

  checks.settableProperty(config);
  checks.mutatedBuild(config);
};
