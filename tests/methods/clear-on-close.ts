import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants/props';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const clearOnClose = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.clearOnClose,
    methodName: Prop.ClearOnClose,
    propSetterPropName: Prop.ClearOnClose,
    slackDtoParamName: SlackDto.mapParam(Prop.ClearOnClose),
  };

  checks.boolTrueProperty(config);
  checks.boolSettableProperty(config);
  checks.literalBuild(config);
};
