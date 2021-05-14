import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants/props';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const blocks = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.blocks,
    methodName: Prop.Blocks,
    propSetterPropName: Prop.Blocks,
    slackDtoParamName: SlackDto.mapParam(Prop.Blocks),
    expectArray: true,
    mutatedValueType: SlackDto,
  };

  checks.appendableProperty(config);
  checks.builtChildBuild(config);
  checks.mutatedBuild(config);
};
