import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const elements = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.elements,
    methodName: Prop.Elements,
    propSetterPropName: Prop.Elements,
    slackDtoParamName: SlackDto.mapParam(Prop.Elements),
    mutatedValueType: SlackDto,
    expectArray: true,
  };

  checks.appendableProperty(config);
  checks.builtChildBuild(config);
  checks.mutatedBuild(config);
};
