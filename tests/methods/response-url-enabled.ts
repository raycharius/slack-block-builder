import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const responseUrlEnabled = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.responseUrlEnabled,
    methodName: Prop.ResponseUrlEnabled,
    propSetterPropName: Prop.ResponseUrlEnabled,
    slackDtoParamName: SlackDto.mapParam(Prop.ResponseUrlEnabled),
  };

  checks.boolTrueProperty(config);
  checks.boolSettableProperty(config);
  checks.literalBuild(config);
};
