import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const ts = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.ts,
    methodName: Prop.Ts,
    propSetterPropName: Prop.Ts,
    slackDtoParamName: SlackDto.mapParam(Prop.Ts),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
