import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants/props';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { PlainTextObject } from '../../src/objects';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const confirmDialog = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.confirmDialog,
    methodName: Prop.Confirm,
    propSetterPropName: Prop.Confirm,
    slackDtoParamName: SlackDto.mapParam(Prop.Confirm),
    mutatedValueType: PlainTextObject,
  };

  checks.settableProperty(config);
  checks.mutatedBuild(config);
};
