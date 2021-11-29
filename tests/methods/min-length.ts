import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const minLength = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.minLength,
    methodName: Prop.MinLength,
    propSetterPropName: Prop.MinLength,
    slackDtoParamName: SlackDto.mapParam(Prop.MinLength),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
