import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const postAt = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.postAt,
    methodName: Prop.PostAt,
    propSetterPropName: Prop.PostAt,
    slackDtoParamName: SlackDto.mapParam(Prop.PostAt),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
