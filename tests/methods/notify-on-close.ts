import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
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
