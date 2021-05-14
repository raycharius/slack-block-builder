import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants/props';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const minQueryLength = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.minQueryLength,
    methodName: Prop.MinQueryLength,
    propSetterPropName: Prop.MinQueryLength,
    slackDtoParamName: SlackDto.mapParam(Prop.MinQueryLength),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
