import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
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
