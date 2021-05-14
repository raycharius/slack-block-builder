import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants/props';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const ignoreMarkdown = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.ignoreMarkdown,
    methodName: Prop.IgnoreMarkdown,
    propSetterPropName: Prop.Mrkdwn,
    slackDtoParamName: SlackDto.mapParam(Prop.Mrkdwn),
  };

  checks.boolFalseProperty(config);
  checks.boolSettableProperty(config);
  checks.literalBuild(config);
};
