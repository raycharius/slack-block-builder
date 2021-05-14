import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants/props';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
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
