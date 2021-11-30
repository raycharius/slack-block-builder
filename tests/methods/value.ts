import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const value = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.value,
    methodName: Prop.Value,
    propSetterPropName: Prop.Value,
    slackDtoParamName: SlackDto.mapParam(Prop.Value),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
