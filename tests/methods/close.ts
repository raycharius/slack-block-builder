import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { PlainTextObject } from '../../src/internal/objects';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const close = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.close,
    methodName: Prop.Close,
    propSetterPropName: Prop.Close,
    slackDtoParamName: SlackDto.mapParam(Prop.Close),
    mutatedValueType: PlainTextObject,
  };

  checks.settableProperty(config);
  checks.mutatedBuild(config);
};
