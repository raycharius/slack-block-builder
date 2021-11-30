import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const fallback = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.fallback,
    methodName: Prop.Fallback,
    propSetterPropName: Prop.Fallback,
    slackDtoParamName: SlackDto.mapParam(Prop.Fallback),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
