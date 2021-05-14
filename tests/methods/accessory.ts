import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants/props';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const accessory = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.accessory,
    methodName: Prop.Accessory,
    propSetterPropName: Prop.Accessory,
    slackDtoParamName: SlackDto.mapParam(Prop.Accessory),
    mutatedValueType: SlackDto,
  };

  checks.settableProperty(config);
  checks.builtChildBuild(config);
  checks.mutatedBuild(config);
};
