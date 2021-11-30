import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const initialOptions = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.initialOptions,
    methodName: Prop.InitialOptions,
    propSetterPropName: Prop.InitialOptions,
    slackDtoParamName: SlackDto.mapParam(Prop.InitialOptions),
    mutatedValueType: SlackDto,
    expectArray: true,
  };

  checks.appendableProperty(config);
  checks.builtChildBuild(config);
  checks.mutatedBuild(config);
};
