import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const url = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.url,
    methodName: Prop.Url,
    propSetterPropName: Prop.Url,
    slackDtoParamName: SlackDto.mapParam(Prop.Url),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
