import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';

import * as checks from '../checks';

export const element = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.element,
    methodName: Prop.Element,
    propSetterPropName: Prop.Element,
    slackDtoParamName: SlackDto.mapParam(Prop.Element),
    mutatedValueType: SlackDto,
  };

  checks.settableProperty(config);
  checks.builtChildBuild(config);
  checks.mutatedBuild(config);
};
