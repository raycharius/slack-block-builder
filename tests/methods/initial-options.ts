import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { OptionBit } from '../../src/bits/option';
import * as checks from '../checks';

export const initialOptions = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.initialOptions,
    methodName: props.initialOptions,
    propSetterPropName: props.initialOptions,
    slackDtoParamName: paramMap.initialOptions,
    mutatedValueType: OptionBit,
    expectArray: true,
  };

  checks.appendableProperty(config);
  checks.builtChildBuild(config);
};
