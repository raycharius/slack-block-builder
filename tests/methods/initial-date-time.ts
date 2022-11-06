import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const initialDateTime = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.initialDateTime,
    methodName: Prop.InitialDateTime,
    propSetterPropName: Prop.InitialDateTime,
    slackDtoParamName: SlackDto.mapParam(Prop.InitialDateTime),
  };

  checks.settableProperty(config);
  checks.mutatedToNumber(config);
};
