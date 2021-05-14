import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants/props';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const notifyOnClose = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.notifyOnClose,
    methodName: Prop.NotifyOnClose,
    propSetterPropName: Prop.NotifyOnClose,
    slackDtoParamName: SlackDto.mapParam(Prop.NotifyOnClose),
  };

  checks.boolTrueProperty(config);
  checks.boolSettableProperty(config);
  checks.literalBuild(config);
};
