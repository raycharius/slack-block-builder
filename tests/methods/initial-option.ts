import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const initialOption = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.initialOption,
    methodName: Prop.InitialOption,
    propSetterPropName: Prop.InitialOption,
    slackDtoParamName: SlackDto.mapParam(Prop.InitialOption),
    mutatedValueType: SlackDto,
  };

  checks.settableProperty(config);
  checks.builtChildBuild(config);
  checks.mutatedBuild(config);
};
