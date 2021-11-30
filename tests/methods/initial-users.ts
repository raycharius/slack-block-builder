import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const initialUsers = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.initialUsers,
    methodName: Prop.InitialUsers,
    propSetterPropName: Prop.InitialUsers,
    slackDtoParamName: SlackDto.mapParam(Prop.InitialUsers),
  };

  checks.appendableProperty(config);
  checks.literalBuild(config);
};
