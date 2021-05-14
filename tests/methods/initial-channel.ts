import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const initialChannel = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.initialChannel,
    methodName: Prop.InitialChannel,
    propSetterPropName: Prop.InitialChannel,
    slackDtoParamName: SlackDto.mapParam(Prop.InitialChannel),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
