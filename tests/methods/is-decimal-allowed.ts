import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const isDecimalAllowed = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.isDecimalAllowed,
    methodName: Prop.IsDecimalAllowed,
    propSetterPropName: Prop.IsDecimalAllowed,
    slackDtoParamName: SlackDto.mapParam(Prop.IsDecimalAllowed),
  };

  checks.boolSettableProperty(config);
  checks.literalBuild(config);
};
