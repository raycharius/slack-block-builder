import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const submitDisabled = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.submitDisabled,
    methodName: Prop.SubmitDisabled,
    propSetterPropName: Prop.SubmitDisabled,
    slackDtoParamName: SlackDto.mapParam(Prop.SubmitDisabled),
  };

  checks.boolTrueProperty(config);
  checks.boolSettableProperty(config);
  checks.literalBuild(config);
};
