import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const attachments = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.attachments,
    methodName: props.attachments,
    propSetterPropName: props.attachments,
    slackDtoParamName: paramMap.attachments,
    expectArray: true,
  };

  checks.appendableProperty(config);
  checks.builtChildBuild(config);
};
