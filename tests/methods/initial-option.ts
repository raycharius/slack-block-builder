import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { OptionBit } from '../../src/bits/option';
import * as checks from '../checks';

export const initialOption = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.initialOption,
    methodName: props.initialOption,
    propSetterPropName: props.initialOption,
    slackDtoParamName: paramMap.initialOption,
    mutatedValueType: OptionBit,
  };

  checks.settableProperty(config);
  checks.builtChildBuild(config);
};
