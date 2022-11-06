import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const minValue = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.minValue,
    methodName: Prop.MinValue,
    propSetterPropName: Prop.MinValue,
    slackDtoParamName: SlackDto.mapParam(Prop.MinValue),
  };

  checks.settableProperty(config);
  checks.mutatedToString(config);
};
