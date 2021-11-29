import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const altText = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.altText,
    methodName: Prop.AltText,
    propSetterPropName: Prop.AltText,
    slackDtoParamName: SlackDto.mapParam(Prop.AltText),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
