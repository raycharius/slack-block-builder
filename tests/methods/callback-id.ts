import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const callbackId = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.callbackId,
    methodName: Prop.CallbackId,
    propSetterPropName: Prop.CallbackId,
    slackDtoParamName: SlackDto.mapParam(Prop.CallbackId),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
