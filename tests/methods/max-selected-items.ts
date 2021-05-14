import { CompositeBuilderClassConfig } from '../test-config-types';
import { Prop } from '../../src/constants/props';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { SlackDto } from '../../src/lib';
import * as checks from '../checks';

export const maxSelectedItems = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.maxSelectedItems,
    methodName: Prop.MaxSelectedItems,
    propSetterPropName: Prop.MaxSelectedItems,
    slackDtoParamName: SlackDto.mapParam(Prop.MaxSelectedItems),
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
