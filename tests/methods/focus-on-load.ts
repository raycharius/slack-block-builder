import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const focusOnLoad = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.focusOnLoad,
    methodName: Prop.FocusOnLoad,
    propSetterPropName: Prop.FocusOnLoad,
    slackDtoParamName: SlackDto.mapParam(Prop.FocusOnLoad),
  };

  checks.boolTrueProperty(config);
  checks.boolSettableProperty(config);
  checks.literalBuild(config);
};
