import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { PlainTextObject } from '../../src/internal/objects';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const placeholder = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.placeholder,
    methodName: Prop.Placeholder,
    propSetterPropName: Prop.Placeholder,
    slackDtoParamName: SlackDto.mapParam(Prop.Placeholder),
    mutatedValueType: PlainTextObject,
  };

  checks.settableProperty(config);
  checks.mutatedBuild(config);
};
