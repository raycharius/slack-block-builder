import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const initialTime = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.initialTime,
    methodName: Prop.InitialTime,
    propSetterPropName: Prop.InitialTime,
    slackDtoParamName: SlackDto.mapParam(Prop.InitialTime),
  };

  checks.settableProperty(config);
};
