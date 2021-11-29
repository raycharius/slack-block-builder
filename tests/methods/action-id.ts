import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const actionId = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.actionId,
    methodName: Prop.ActionId,
    propSetterPropName: Prop.ActionId,
    slackDtoParamName: SlackDto.mapParam(Prop.ActionId),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
