import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
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
