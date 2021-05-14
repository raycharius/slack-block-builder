import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants/props';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const initialUser = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.initialUser,
    methodName: Prop.InitialUser,
    propSetterPropName: Prop.InitialUser,
    slackDtoParamName: SlackDto.mapParam(Prop.InitialUser),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
