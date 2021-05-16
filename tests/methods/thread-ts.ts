import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const threadTs = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.threadTs,
    methodName: Prop.ThreadTs,
    propSetterPropName: Prop.ThreadTs,
    slackDtoParamName: SlackDto.mapParam(Prop.ThreadTs),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
