import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants/props';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const maxLength = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.maxLength,
    methodName: Prop.MaxLength,
    propSetterPropName: Prop.MaxLength,
    slackDtoParamName: SlackDto.mapParam(Prop.MaxLength),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
