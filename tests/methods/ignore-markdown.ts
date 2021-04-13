import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const ignoreMarkdown = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.ignoreMarkdown,
    methodName: props.ignoreMarkdown,
    propSetterPropName: props.mrkdwn,
    slackDtoParamName: paramMap.mrkdwn,
  };

  checks.boolFalseProperty(config);
  checks.boolSettableProperty(config);
  checks.literalBuild(config);
};
