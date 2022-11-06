import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const maxValue = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.maxValue,
    methodName: Prop.MaxValue,
    propSetterPropName: Prop.MaxValue,
    slackDtoParamName: SlackDto.mapParam(Prop.MaxValue),
  };

  checks.settableProperty(config);
  checks.mutatedToString(config);
};
