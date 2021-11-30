import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const deleteOriginal = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.deleteOriginal,
    methodName: Prop.DeleteOriginal,
    propSetterPropName: Prop.DeleteOriginal,
    slackDtoParamName: SlackDto.mapParam(Prop.DeleteOriginal),
  };

  checks.boolTrueProperty(config);
  checks.boolSettableProperty(config);
  checks.literalBuild(config);
};
