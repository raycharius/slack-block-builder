import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { PlainTextObject } from '../../src/internal/objects';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const hint = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.hint,
    methodName: Prop.Hint,
    propSetterPropName: Prop.Hint,
    slackDtoParamName: SlackDto.mapParam(Prop.Hint),
    mutatedValueType: PlainTextObject,
  };

  checks.settableProperty(config);
  checks.mutatedBuild(config);
};
