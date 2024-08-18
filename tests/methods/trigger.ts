import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const trigger = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.trigger,
    methodName: Prop.Trigger,
    propSetterPropName: Prop.Trigger,
    slackDtoParamName: SlackDto.mapParam(Prop.Trigger),
    mutatedValueType: SlackDto,
  };

  checks.settableProperty(config);
  checks.mutatedBuild(config);
  checks.builtTriggerProperty(config);
};
