import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants/props';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { PlainTextObject } from '../../src/objects';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const title = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.title,
    methodName: Prop.Title,
    propSetterPropName: Prop.Title,
    slackDtoParamName: SlackDto.mapParam(Prop.Title),
    mutatedValueType: PlainTextObject,
  };

  checks.settableProperty(config);
  checks.mutatedBuild(config);
};
