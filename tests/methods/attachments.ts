import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/internal/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/internal';
import * as checks from '../checks';

export const attachments = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.attachments,
    methodName: Prop.Attachments,
    propSetterPropName: Prop.Attachments,
    slackDtoParamName: SlackDto.mapParam(Prop.Attachments),
    expectArray: true,
    mutatedValueType: SlackDto,
  };

  checks.appendableProperty(config);
  checks.builtChildBuild(config);
  checks.mutatedBuild(config);
};
