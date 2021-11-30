import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const initialDate = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.initialDate,
    methodName: Prop.InitialDate,
    propSetterPropName: Prop.InitialDate,
    slackDtoParamName: SlackDto.mapParam(Prop.InitialDate),
  };

  checks.settableProperty(config);
};
