import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { PlainTextObject, MarkdownObject } from '../../src/objects';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const text = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.text,
    methodName: Prop.Text,
    propSetterPropName: Prop.Text,
    slackDtoParamName: SlackDto.mapParam(Prop.Text),
    mutatedValueType: params.expectMarkdown ? MarkdownObject : PlainTextObject,
  };

  checks.settableProperty(config);
  checks.mutatedBuild(config);
};
