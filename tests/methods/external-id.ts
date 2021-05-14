import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants/props';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const externalId = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.externalId,
    methodName: Prop.ExternalId,
    propSetterPropName: Prop.ExternalId,
    slackDtoParamName: SlackDto.mapParam(Prop.ExternalId),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
