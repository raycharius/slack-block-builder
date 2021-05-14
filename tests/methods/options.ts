import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants/props';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const options = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.options,
    methodName: Prop.Options,
    propSetterPropName: Prop.Options,
    slackDtoParamName: SlackDto.mapParam(Prop.Options),
    mutatedValueType: SlackDto,
    expectArray: true,
  };

  checks.appendableProperty(config);
  checks.builtChildBuild(config);
  checks.mutatedBuild(config);
};
