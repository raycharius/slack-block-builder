import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { ElementBase } from '../../src/base';
import * as checks from '../checks';

export const accessory = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.accessory,
    methodName: props.accessory,
    propSetterPropName: props.accessory,
    slackDtoParamName: paramMap.accessory,
    mutatedValueType: ElementBase,
  };

  checks.settableProperty(config);
  checks.builtChildBuild(config);
};
