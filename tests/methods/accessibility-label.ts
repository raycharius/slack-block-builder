import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const accessibilityLabel = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.altText,
    methodName: Prop.AccessibilityLabel,
    propSetterPropName: Prop.AccessibilityLabel,
    slackDtoParamName: SlackDto.mapParam(Prop.AccessibilityLabel),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
