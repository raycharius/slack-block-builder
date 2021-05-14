import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants/props';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { MarkdownObject } from '../../src/objects';
import { SlackDto } from '../../src/lib';
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
