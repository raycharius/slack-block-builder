import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const replaceOriginal = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.replaceOriginal,
    methodName: Prop.ReplaceOriginal,
    propSetterPropName: Prop.ReplaceOriginal,
    slackDtoParamName: SlackDto.mapParam(Prop.ReplaceOriginal),
  };

  checks.boolTrueProperty(config);
  checks.boolSettableProperty(config);
  checks.literalBuild(config);
};
