import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
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
