import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { PlainTextObject } from '../../src/internal/objects';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const deny = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.deny,
    methodName: Prop.Deny,
    propSetterPropName: Prop.Deny,
    slackDtoParamName: SlackDto.mapParam(Prop.Deny),
    mutatedValueType: PlainTextObject,
  };

  checks.settableProperty(config);
  checks.mutatedBuild(config);
};
