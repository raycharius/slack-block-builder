import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import { OptionGroupBit } from '../../src/bits/option-group';
import * as checks from '../checks';

export const optionGroups = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.optionGroups,
    methodName: props.optionGroups,
    propSetterPropName: props.optionGroups,
    slackDtoParamName: paramMap.optionGroups,
    mutatedValueType: OptionGroupBit,
    expectArray: true,
  };

  checks.appendableProperty(config);
  checks.builtChildBuild(config);
};
