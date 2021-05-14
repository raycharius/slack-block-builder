import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants/props';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { PlainTextObject } from '../../src/objects';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const submit = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.submit,
    methodName: Prop.Submit,
    propSetterPropName: Prop.Submit,
    slackDtoParamName: SlackDto.mapParam(Prop.Submit),
    mutatedValueType: PlainTextObject,
  };

  checks.settableProperty(config);
  checks.mutatedBuild(config);
};
