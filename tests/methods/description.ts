import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { PlainTextObject, MarkdownObject } from '../../src/internal/objects';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const description = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.description,
    methodName: Prop.Description,
    propSetterPropName: Prop.Description,
    slackDtoParamName: SlackDto.mapParam(Prop.Description),
    mutatedValueType: params.expectMarkdown ? MarkdownObject : PlainTextObject,
  };

  checks.settableProperty(config);
  checks.mutatedBuild(config);
};
