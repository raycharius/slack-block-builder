import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const confirm = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.confirm,
    methodName: Prop.Confirm,
    propSetterPropName: Prop.Confirm,
    slackDtoParamName: SlackDto.mapParam(Prop.Confirm),
  };

  checks.settableProperty(config);
  checks.builtChildBuild(config);
};
