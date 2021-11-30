import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { MarkdownObject } from '../../src/internal/objects';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const fields = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.fields,
    methodName: Prop.Fields,
    propSetterPropName: Prop.Fields,
    slackDtoParamName: SlackDto.mapParam(Prop.Fields),
    mutatedValueType: MarkdownObject,
    expectArray: true,
  };

  checks.appendableProperty(config);
  checks.mutatedBuild(config);
};
