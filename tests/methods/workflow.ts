import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const workflow = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.workflow,
    methodName: Prop.Workflow,
    propSetterPropName: Prop.Workflow,
    slackDtoParamName: SlackDto.mapParam(Prop.Workflow),
    mutatedValueType: SlackDto,
  };

  checks.settableProperty(config);
  checks.mutatedBuild(config);
};
