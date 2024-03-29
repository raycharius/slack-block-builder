import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const optionGroups = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.optionGroups,
    methodName: Prop.OptionGroups,
    propSetterPropName: Prop.OptionGroups,
    slackDtoParamName: SlackDto.mapParam(Prop.OptionGroups),
    mutatedValueType: SlackDto,
    expectArray: true,
  };

  checks.appendableProperty(config);
  checks.builtChildBuild(config);
  checks.mutatedBuild(config);
};
