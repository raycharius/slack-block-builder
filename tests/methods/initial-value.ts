import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants/props';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const initialValue = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.initialValue,
    methodName: Prop.InitialValue,
    propSetterPropName: Prop.InitialValue,
    slackDtoParamName: SlackDto.mapParam(Prop.InitialValue),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
